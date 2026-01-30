import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { userRegistrationSchema } from "@/lib/validationSchema";

export async function POST(request) {
  const { first_name, last_name, client_email, client_phone, client_message, isExistingPatient } =
    await request.json();

  const result = userRegistrationSchema.safeParse({
    first_name,
    last_name,
    client_email,
    client_phone,
    client_message,
  });

  if (!result.success) {
    console.log(result.error);
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL, 
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptionsExistingPatient = {
    from: process.env.SMTP_EMAIL,
    to: "reception@broadwaysmiles.ca",
    subject: `Existing Patient: ${first_name} requested an appointment`,
    text: `
Hi,

This message has been prompted by the website submit form.
${first_name} has requested an appointment.
Contact:
Name: ${first_name} ${last_name}
Email: ${client_email}
Phone: ${client_phone}

Message: ${client_message}`,
    bcc: 'development@avenatech.ca'
  };

  const mailOptionsNewPatient = {
    from: process.env.SMTP_EMAIL,
    to: "reception@broadwaysmiles.ca",
    subject: `New Contact Form Submission From  [${first_name}]`,
    text: `
Hi,

This message has been prompted by the website submit form.
${first_name} has requested an appointment.
Contact:
Name: ${first_name} ${last_name}
Email: ${client_email}
Phone: ${client_phone}

Message: ${client_message}`,
    bcc: 'development@avenatech.ca'
  };

  const replyMailOptions = {
    from: process.env.SMTP_EMAIL,
    to: `${client_email}`,
    subject: `Your Contact Form Submission Has Been Sent!`,
    text: `
Dear ${first_name},

Thank you for reaching out to us! We have successfully received your contact information.

Below is a copy of your submission (a sample of what was sent to our team):
---
Name: ${first_name} ${last_name}
Email: ${client_email}
Phone: ${client_phone}
Message: ${client_message}
---

For any urgent inquiries, contact us directly at 604-736-7377.

We look forward to serving you soon.

Best regards,
Broadway Smiles Dental Team
https://broadwaysmiles.ca`,
        
    cc: 'reception@broadwaysmiles.ca',
    bcc: 'development@avenatech.ca'
  };

  const replyMailOptionsExisting = {
    from: process.env.SMTP_EMAIL,
    to: `${client_email}`,
    subject: `Existing Patient: Your Appointment Request Has Been Received!`,
    text: `
Dear ${first_name},

Thank you for reaching out! We have successfully received your appointment request.

Below is a copy of your submission (a sample of what was sent to our team):
---
Name: ${first_name} ${last_name}
Email: ${client_email}
Phone: ${client_phone}
Message: ${client_message}
---

For any urgent inquiries, contact us directly at 604-736-7377.

We look forward to serving you soon.

Best regards,
Broadway Smiles Dental Team
https://broadwaysmiles.ca`,
        
    cc: 'reception@broadwaysmiles.ca',
    bcc: 'development@avenatech.ca'
  };

  const failedMailOptions = {
    from: process.env.SMTP_EMAIL,
    to: "development@avenatech.ca",
    subject: `URGENT - Email Form Failure`,
    text: `
Failed email form.

Attempted fields:
Name: ${first_name} ${last_name}
Email: ${client_email}
Phone: ${client_phone}
Message: ${client_message}

Error message: ${result.error}`,
  };

  const sendMailPromise = options =>
    new Promise((resolve, reject) => {
      transport.sendMail(options, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
          console.log(`Failed to Send Failed Email: ${err.message}`)
        }
      });
    });

    try {
      const options = isExistingPatient ? mailOptionsExistingPatient : mailOptionsNewPatient;
      const replyOptions = isExistingPatient ? replyMailOptionsExisting : replyMailOptions;
      await sendMailPromise(options);
      await sendMailPromise(replyOptions);
      console.log(`Existing patient: ${isExistingPatient}`);
      console.log("Emails sent");
      return NextResponse.json({ message: "Email sent" }, { status: 200 });
    } catch (err) {
      console.log(err);
      
      // Send failure notification email
      try {
        await sendMailPromise(failedMailOptions);
        console.log("Failed email notification sent");
      } catch (failedErr) {
        console.log(`Failed to send failure notification email: ${failedErr}`);
      }
  
      return NextResponse.json({ error: err }, { status: 500 });
    }
}
