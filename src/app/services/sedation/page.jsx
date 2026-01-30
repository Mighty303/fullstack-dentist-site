import React from "react";
import Header from "@/components/Navbar/Header";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";
import WhiteSection from "@/components/WhiteSection";
import BlueSection from "@/components/BlueSection";
import Faq from "@/components/Faq";
import FaqContainerBlue from "@/components/FaqContainerBlue";

const radioData = [
  {
    index: 1,
    label: "Who is a candidate for Sedation Dentistry?",
    content:
      "Anyone who has fear and anxiety about dental treatment. Anyone who wants to get a significant amount of dental work done in one visit. Anyone who has a strong gag reflex or has put off dental care for years because of dental anxieties.",
  },
  {
    index: 2,
    label: "What are the benefits of Sedation Dentistry?",
    content:
      "Multiple procedures can often be efficiently performed in one appointment. Anxiety and pain are safely eliminated",
  },
  {
    index: 3,
    label: "What to expect with Oral Sedation Dentistry?",
    content:
      "Oral sedation is not general anesthesia. You will take medication prior to the dental procedure, and upon arrival your sedation level will be assessed. Treatment will begin when adequate sedation is achieved. You will be very sleepy and relaxed. Oral sedation allows patients to be responsive and able to verbalize needs and wants. The sedatives are amnesiacs; therefore, you will have little or no memory of the experience. Vital signs will be continuously monitored for your safety. You must have a driver to and from the appointment, and plan on resting for the remainder of the day.",
  },
  {
    index: 4,
    label: "What are my risk of Sedation Dentistry?",
    content:
      "A safe dosage for you may not provide adequate sedation and your procedure may be postponed, or your treatment may be performed with less sedation than desired. Unusual reaction to the sedative drugs such as altered mental states, physical reactions, allergic reactions, and other conditions that may require emergency medical attention. Inability to discuss treatment options with the doctor should unusual circumstance requires a change in treatment plan.",
  },
  {
    index: 5,
    label: "What are my alternatives to Oral Sedation Dentistry?",
    content: [
      "No sedation: The treatment is performed under local anesthetic with you fully aware.",
      "Nitrous oxide sedation: Commonly called laughing gas, nitrous oxide provides relaxation but you will still generally be aware of surrounding activities. Its effects can be reversed quickly with oxygen.",
      "Intravenous (I.V.) conscious sedation: The dentist or anesthesiologist injects the sedative in a tube connected to a vein in your arm to put you in a minimally to moderately depressed level of consciousness.",
      "General anesthesia: Also called deep sedation, a patient under general anesthetic has no awareness and may need their breathing supported by intubation.",
    ],
  },
  // Add more options as needed
];

export const metadata = {
  title: "Sedation Dentistry Burnaby in Vancouver | Broadway Smiles",
  description:
    "Experience minimal sedation dentistry in Vancouver. Broadway Smiles methods help alleviate fear and anxiety, ensuring a comfortable dental experience. Visit us.",
  metadataBase: new URL("https://broadwaysmiles.ca/services"),
  alternates: {
    canonical: "/sedation",
  },
  keywords:
    "sedation dentistry in vancouver, vancouver sedation dentistry, sedation dentistry burnaby, sedation dentistry Vancouver",
  openGraph: {
    title: "Sedation Dentistry Burnaby in Vancouver | Broadway Smiles",
    description:
      "Experience minimal sedation dentistry in Vancouver. Broadway Smiles methods help alleviate fear and anxiety, ensuring a comfortable dental experience. Visit us.",
    url: "/sedation",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const Sedation = () => {
  return (
    <>
      <Header />
      <WhiteSection
        header={["Sedation"]}
        isHeaderH1={true}
        content={[
          "At Broadway Smiles we understand that dental visits can be challenging for some patients, and we&#39;re here to create a calming experience tailored just for you. Don't let fear or anxiety delay your visits – our Minimal Sedation Services ensure a soothing environment for routine treatments.",
          "",
          "Minimal Sedation is a minimally depressed level of consciousness, produced by a pharmacological method, that retains the patient&#39;s ability to maintain an airway and respond normally to tactile stimulation and verbal command independently and continuously.",
        ]}
        buttonText="Request Appointment"
        link="/contact"
      >
        <img src={"/assets/images/sedation.png"} alt="sedation" />
      </WhiteSection>
      <BlueSection
        header={["Inhalation Sedation"]}
        content={[
          "Inhalation Sedation, featuring Nitrous Oxide, commonly known as 'Laughing Gas,' is a globally trusted method in dentistry. Delivered through sterilized nose masks, this gentle sedation option ensures your comfort throughout the treatment. Nitrous gas is safe and always delivered with Oxygen, and it exits your system as soon as the mask is removed.",
        ]}
        contentType="paragraph"
      >
        <img
          src={"/assets/images/inhalation-sedation.jpg"}
          alt="Intra Oral Scan"
        />
      </BlueSection>
      <WhiteSection
        header={["Oral Sedation"]}
        content={[
          "For those with heightened apprehension, our Oral Sedation, utilizing Benzodiazepines, offer a carefully dosed approach to achieve minimal sedation. You'll feel calm and comfortable, allowing you to receive the dental care you need. Rest assured, our team prioritizes your well-being, creating an atmosphere where you can relax and leave any worries behind.",
          "",
          "Please communicate with your dentist about your fears and anxiety when it comes to dental treatments, proper communication can allow us to minimize any triggers while ensuring to deliver the best treatment.",
        ]}
      >
        <img src={"/assets/images/oral-sedation.png"} alt="Oral Sedation" />
      </WhiteSection>
      <FaqContainerBlue arr={radioData} />

      <ScrollButton />
      <Footer />
    </>
  );
};

export default Sedation;
