import React from "react";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
// Visit Hero

import Hero from "@/components/Hero";
import Instagram from "@/components/Home/Instagram";
import WhiteSectionReverse from "@/components/WhiteSectionReverse";
import BlueSectionReverse from "@/components/BlueSectionReverse";
import FaqContainerWhite from "@/components/FaqContainerWhite";

import dynamic from "next/dynamic";

// Import Virtual tours dynamically so it uses client-side rendering
const VirtualTour = dynamic(() => import('@/components/VirtualTour'), {
  ssr: false,
});

const radioData = [
  {
    index: 1,
    label: "How do I schedule my first appointment?",
    content:
      "To schedule your first appointment, you can call our office during business hours, or use our online appointment request form to request an appointment. Our friendly team will assist you in finding a convenient time for your visit.",
  },
  {
    index: 2,
    label: "What should I bring to my first appointment?",
    content:
      "Please bring any dental insurance information, a list of current medications, and, if applicable have any previous dental records or X-rays be sent to our office. If you have completed new patient forms beforehand, it will help expedite your check-in process.",
  },
  {
    index: 3,
    label: "Do you accept my dental insurance?",
    content:
      "We accept a variety of dental insurance plans. Our team is experienced in navigating different insurance policies. Feel free to provide your insurance details when scheduling your appointment, and we will help verify your coverage.",
  },
  {
    index: 4,
    label: "How does direct billing to insurance work?",
    content:
      "At Broadway Smiles, we offer direct billing to many insurance providers. This means that, once you've provided your insurance information, we'll handle the billing process on your behalf, saving you time and paperwork.",
  },
  {
    index: 5,
    label:
      "Is there a cost for the first visit, and what payment options do you accept?",
    content:
      "The cost of your first visit will depend on the services provided and your insurance coverage. We accept various payment options, including cash, credit cards, and personal checks. Our team can provide you with an estimate of costs before your appointment.",
  },
  {
    index: 6,
    label: "What COVID-19 safety measures are in place at the clinic?",
    content:
      "Your safety is our priority. We have implemented rigorous COVID-19 safety protocols, including enhanced sanitation, screening procedures, and social distancing measures. Please review our COVID-19 safety guidelines on our website for more details.",
  },
  {
    index: 7,
    label: "Do I need to arrive early for my appointment?",
    content:
      "We recommend arriving 10-15 minutes before your scheduled appointment to complete any necessary paperwork and ensure a smooth check-in process. If you've already submitted your new patient forms online, this step can be expedited.",
  },
  {
    index: 8,
    label: "What if I have dental anxiety?",
    content:
      "We understand that some patients may experience dental anxiety. Our dentists and team are trained to provide a comforting environment, and we encourage open communication about any concerns you may have.",
  },
];

export const metadata = {
  title: "Before Your First Visit | Broadway Smiles",
  description:
    "Prepare for your first visit with Broadway Smiles. Discover what to expect, the services offered, and how to make the most of your dental appointment.",
  metadataBase: new URL("https://broadwaysmiles.ca"),
  alternates: {
    canonical: "/before-first-visit",
  },
  openGraph: {
    title: "Before Your First Visit | Broadway Smiles",
    description:
      "Prepare for your first visit with Broadway Smiles. Discover what to expect, the services offered, and how to make the most of your dental appointment.",
    url: "/before-first-visit",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const BeforeFirstVisit = () => {
  return (
    <>
      <Header />
      {/* <TopImage /> */}
      <Hero
        title="BEFORE YOUR FIRST VISIT"
        imageUrl="/assets/images/banner/banner-visit3.jpg"
        page="Before First Visit"
      />
      <WhiteSectionReverse
        header={["Before Your First Visit"]}
        content={[
          "We are thrilled that you chose Broadway Smiles to be your dental home. To ensure a seamless and comfortable experience, we have prepared this guide to familiarize you with what to expect before your first visit.",
          "",
          "We understand that a visit to the dentist can be a new experience for some. Rest assured, our friendly and knowledgeable team is here to guide you through every step of your visit. From the moment you walk through our doors, our goal is to make you feel welcomed, informed, and well-cared for.",
        ]}
      >
        <img src={"/assets/images/BeforeFirstVisit.png"} alt="team photo" />
      </WhiteSectionReverse>
      <BlueSectionReverse
        header={["Understanding Your Insurance"]}
        content={[
          `Navigating insurance information can be overwhelming, but we're here to help. Before your first visit, take a moment to review your insurance details. If you have any questions or concerns, don't hesitate to reach out to our team. We're more than happy to assist you in understanding your coverage and benefits. To make your experience even more hassle-free, we offer direct billing to your insurance. Our team will work closely with you to streamline the billing process, allowing you to focus on your dental care rather than paperwork. If you have specific questions about the direct billing process, feel free to inquire during your visit or contact us beforehand.`,
        ]}
      >
        <img src={"/assets/images/insurance.png"} alt="team photo" />
      </BlueSectionReverse>

      <div className="flex flex-col items-center justify-center mt-16 mx-8 md:mx-12">
        {/* <img src={'/assets/images/BeforeFirstVisit.png'} alt='team photo' /> */}
        <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-black">Clinic Tour</p>
        <p className="font-normal text-center mt-4 py-12">
          Familiarize yourself with our clinic. We are located right on West Broadway near Macdonald Street.
        </p>
        <div className='flex flex-col gap-8 items-center w-full justify-center'>
          <VirtualTour src='https://avena-tech.github.io/virtual-tour-img/virtual_tour.jpg' initialYaw={135} initialPitch={0} />
          <VirtualTour src='https://avena-tech.github.io/virtual-tour-img/hallway-end.jpg' initialYaw={-130} initialPitch={0} />
          <VirtualTour src='https://avena-tech.github.io/virtual-tour-img/hallway-end-2.jpg' initialYaw={-130} initialPitch={0} />
        </div>
      </div>
      <FaqContainerWhite arr={radioData} location={"First Visit FAQ"} />
      <Instagram />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default BeforeFirstVisit;
