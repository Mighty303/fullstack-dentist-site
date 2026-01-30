import React from "react";
import Header from "@/components/Navbar/Header";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";

import WhiteSection from "@/components/WhiteSection";
import BlueSection from "@/components/BlueSection";

export const metadata = {
  title: "Intra Oral Scan Services in Vancouver | Broadway Smiles",
  description:
    "At Broadway Smiles, we offer advanced intra oral scan services using NIRI Imaging technology for detailed oral health monitoring & prevention. Book appointment.",
  metadataBase: new URL("https://broadwaysmiles.ca/services"),
  alternates: {
    canonical: "/intra-oral-scan",
  },
  keywords:
    "Intra Oral Scan, intra oral dental assistant, intra oral scanner, intra oral",
  openGraph: {
    title: "Intra Oral Scan Services in Vancouver | Broadway Smiles",
    description:
      "At Broadway Smiles, we offer advanced intra oral scan services using NIRI Imaging technology for detailed oral health monitoring & prevention. Book appointment.",
    url: "/intra-oral-scan",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const IntraOralHealthScan = () => {
  return (
    <>
      <Header />
      <WhiteSection
        header={["Intra Oral Health Scan"]}
        isHeaderH1={true}
        content={[
          "Where Precision Meets Prevention! At Broadway Smiles, we take immense pride in enrolling all our patients in our monitoring program. Our radiation-free scanner captures detailed 3D models of your mouth, allowing us to meticulously track any shifts in teeth, traumatic wear, and assess gum health and recession levels with accuracy.",
        ]}
        buttonText="Request Appointment"
        link="/contact"
      >
        <img
          src={"/assets/images/intra-oral.png"}
          alt="Intra Oral Health Scan"
        />
      </WhiteSection>
      <BlueSection
        header={["Why we choose to consume our time with you using the iTero?"]}
        content={[
          `<b>Comprehensive Monitoring:</b> offers a comprehensive view of your oral health, enabling us to identify potential issues early on
            `,
          `<b>Occlusion Diagnosis:</b> Occlusion is the medical term for our bite: how the
            top and lower jaw meet during chewing. A traumatic occlusion is linked to many other conditions in the mouth. Causing gum recession, bone loss, failing restorations, and even tooth cracks and fractures. Many of these conditions can be diagnosed earlier and addressed proactively.
            `,
          `<b>Bite Map Visualization:</b> view your bite with the bite map, helping us identify teeth making too much contact and preventing long-term traumatic bite issues that could lead to wear and fractures of fillings, crowns, or teeth.`,
        ]}
      >
        <img
          src={"/assets/images/staggered.png"}
          alt="staggered images of intra health scan"
        />
      </BlueSection>
      <WhiteSection
        header={["Niri Imaging"]}
        content={[
          "Near Infra-Red Imaging is a new technology that shines infrared light through the tooth and helps detect signs of decalcification or cavities. It is a safe method as there is no radiation involved. It is a non-invasive, and painless way to monitor these changes. Finding areas of decalcification early can empower the patient to adjust their oral hygiene routine. Allowing them to focus on these compromised areas, supplementing the routine with a mouth rinse and eliminating certain diet habits.",
        ]}
      >
        <img
          src={"/assets/occlusal-view.gif"}
          className="rounded-lg"
          alt="Occlusal view"
        />
      </WhiteSection>
      {/* <BlueSection
          header={['Occlusion Bite Map']}
          content={['Detects cavities in their earliest stages','No radiation exposure','No discomfort','No need for x-rays','Can detect cavities under existing fillings','Can detect cavities in between teeth']}
          contentType='list'
          buttonText='Learn More'
        >
            <img src={intraOralHealthScanImage2} alt='Intra Oral Health Scan' />
        </BlueSection> */}
      <ScrollButton />
      <Footer />
    </>
  );
};

export default IntraOralHealthScan;
