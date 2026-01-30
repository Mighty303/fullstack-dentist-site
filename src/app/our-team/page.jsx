import React from "react";
import Header from "@/components/Navbar/Header";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";
import TeamHero from "@/components/OurTeam/TeamHero";
import Doctors from "@/components/OurTeam/Doctors";
import Assistants from "@/components/OurTeam/Assistants";
import FrontDesk from "@/components/OurTeam/FrontDesk";

export const metadata = {
  title: "About Our Dental Practice in Vancouver | Broadway Smiles",
  description:
    "Learn about Broadway Smiles, a leading dental practice in Vancouver. Discover our dedicated team, advanced treatments, & commitment to exceptional patient care.",
  metadataBase: new URL("https://broadwaysmiles.ca"),
  alternates: {
    canonical: "/our-team",
  },
  openGraph: {
    title: "About Our Dental Practice in Vancouver | Broadway Smiles",
    description:
      "Learn about Broadway Smiles, a leading dental practice in Vancouver. Discover our dedicated team, advanced treatments, & commitment to exceptional patient care.",
    url: "/our-team",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const OurTeam = () => {
  return (
    <>
      <Header />
      <TeamHero />
      <Doctors />
      <Assistants />
      <FrontDesk />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default OurTeam;
