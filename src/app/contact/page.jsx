import React from "react";
import Header from "@/components/Navbar/Header";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import ContactBroadWaySmiles from "@/components/Contact/ContactBroadWaySmiles";
import GetInTouch from "@/components/Contact/GetInTouch";
import Instagram from "@/components/Home/Instagram";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Contact Broadway Smiles For Your Dental Needs in Vancouver",
  description:
    "Reach out to Broadway Smiles for top-notch dental care in Vancouver. Book an appointment, ask questions, or get directions. We help with all your dental needs!",
  metadataBase: new URL("https://broadwaysmiles.ca"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Broadway Smiles For Your Dental Needs in Vancouver",
    description:
      "Reach out to Broadway Smiles for top-notch dental care in Vancouver. Book an appointment, ask questions, or get directions. We help with all your dental needs!",
    url: "/contact",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const Contact = () => {
  return (
    <>
      <Header />
      <Hero
        imageUrl="/assets/images/banner/banner-contact3.jpg"
        title="CONTACT US"
        page="CONTACT US"
      />
      <ContactBroadWaySmiles />
      <GetInTouch />
      <section className="grid grid-cols-1 gap-8 h-96">
        <ContactInfo />
      </section>
      <Instagram />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Contact;
