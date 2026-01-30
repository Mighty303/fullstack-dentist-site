import React from "react";
import Header from "@/components/Navbar/Header";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";
import WhiteSection from "@/components/WhiteSection";
import dynamic from "next/dynamic";

const ProceduresNew = dynamic(() => import('@/components/Home/ProceduresNew'), {
  ssr: false,
});

export const metadata = {
  title: "General Dentistry Services in Vancouver - Broadway Smiles",
  description:
    "Get comprehensive general dentistry services in Vancouver at Broadway Smiles. We offer expert treatments to maintain your oral health. Visit us today!",
  metadataBase: new URL("https://broadwaysmiles.ca/services"),
  alternates: {
    canonical: "/general-dentistry",
  },
  keywords:
    "general dentistry, general dentistry vancouver, general dentistry services, general dentistry treatments",
  openGraph: {
    title: "General Dentistry Services in Vancouver - Broadway Smiles",
    description:
      "Get comprehensive general dentistry services in Vancouver at Broadway Smiles. We offer expert treatments to maintain your oral health. Visit us today!",
    url: "/general-dentistry",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const GeneralDentistry = () => {
  return (
    <>
      <Header />
      <WhiteSection
        header={["General Dentistry"]}
        isHeaderH1={true}
        content={[
          "Whether you require restorations due to decay or need to restore a tooth from a break or fracture, we will help guide you through the process to the best option. We work with high-end materials that are meticulously matched to the need of your teeth, providing not only strength but also aesthetic appeal.",
          "",
          "If a tooth is compromised beyond repair, we can help you navigate the best course of action. Our compassionate team is experienced in tooth extractions and will guide you through the process with utmost care and attention. Moreover, we understand the importance of restoring the spaces left by extracted teeth. We offer a range of acceptable substitutes, ensuring your smile remains complete and functional.",
        ]}
        buttonText="Request Appointment"
        link="/contact"
      >
        <img
          src={"/assets/images/general-dentistry.png"}
          alt="General Dentistry"
        />
      </WhiteSection>
      <ProceduresNew blue />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default GeneralDentistry;
