import React from "react";
import Header from "@/components/Navbar/Header";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";
import WhiteSection from "@/components/WhiteSection";
import BlueSection from "@/components/BlueSection";
import Link from "next/link";

export const metadata = {
  title: "Oral Recare Program in Vancouver BC | Broadway Smiles",
  description:
    "Explore Broadway Smiles' complete Oral Recare Program in Vancouver. Take charge of your oral health with our reliable dental care services. Visit us today!",
  metadataBase: new URL("https://broadwaysmiles.ca/services"),
  alternates: {
    canonical: "/oral-recare-program",
  },
  keywords: "Oral Recare Program, Oral Recare Program vancouver",
  openGraph: {
    title: "Oral Recare Program in Vancouver BC | Broadway Smiles",
    description:
      "Explore Broadway Smiles' complete Oral Recare Program in Vancouver. Take charge of your oral health with our reliable dental care services. Visit us today!",
    url: "/oral-recare-program",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const OralRecareProgram = () => {
  return (
    <>
      <Header />
      <WhiteSection
        header={["Oral Recare Program"]}
        isHeaderH1={true}
        content={[
          "The Oral recare Program – the personalized path to dental Wellness! At Broadway Smiles, we go beyond routine check-ups; we embrace a proactive approach to optimal dental health. With our meticulous Oral Recare Program, we tailor a plan for each patient, closely monitoring their teeth and gums and occlusion. We take the extra effort to determine the recommended frequency of scaling, check-ups, and preventative X-rays or scans based on individual needs. Our dedicated team keeps a vigilant eye on the oral tissues, gum health, recession, wear, and tooth shifting.",
        ]}
        buttonText="Request Appointment"
        link="/contact"
      >
        <img src={"/assets/images/oral-recare.png"} alt="Oral Recare Program" />
      </WhiteSection>
      <BlueSection
        header={["This Program Includes"]}
        content={[
          "Routine checkup: Thorough examinations to assess the health of your teeth, gums, and all oral tissues",
          "Scaling- to debride the deeper surfaces of your teeth",
          "Polishing- after scaling helps remove surface stains",
          "Yearly gums assessment- monitoring for gum disease and reporting quantitative readings for gum health",
          "Recommended Fluoride treatment- available upon request",
          "Preventive Diagnostic X-rays: Early identification of potential issues such as cavities and gum disease for timely intervention.",
          // <CustomHtmlParser html="<a href='services/intra-oral-scan' style='font-weight: bold'>Intraoral Diagnostic Scan:</a> Precise tracking of tooth shifting, wear, and gum recession, ensuring proactive measures to maintain your optimal oral health." />,
          <span>
            <Link
              href="/services/intra-oral-scan"
              className="font-bold text-[#0184C9]"
            >
              Intraoral Diagnostic Scan:
            </Link>{" "}
            Precise tracking of tooth shifting, wear, and gum recession,
            ensuring proactive measures to maintain your optimal oral health.
          </span>,
        ]}
        contentType="list"
      >
        <img
          src={"/assets/images/intraoralhealthscan.png"}
          alt="Intra Oral Scan"
        />
      </BlueSection>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default OralRecareProgram;
