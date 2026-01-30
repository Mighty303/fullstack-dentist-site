import nodemailer from 'nodemailer';

export async function sendMail({ name, subject, body}) {
  const { SMPT_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMPT_EMAIL,
      pass: SMTP_PASSWORD,
    },
    });

    try {
        const testResult = await transport.verify();
        console.log(testResult);
    }
    catch (error) {
        console.log(error);
        return;
    }

    try {
        const sendResult = await transport.sendMail({ from: SMPT_EMAIL, to: subject, html: `<p>${body}</p>`, cc: 'development@avenatech.ca' });
        console.log(sendResult);
    }
    catch (error) {
        const sendError = await transport.sendMail({ from: SMPT_EMAIL, to: subject, html: `<p>${body}</p>`, cc: 'development@avenatech.ca' });
        console.log(sendError);
        console.log(error);
    }
 
}