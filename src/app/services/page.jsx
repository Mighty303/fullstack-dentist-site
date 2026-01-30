import React from "react";
import Header from "@/components/Navbar/Header";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";
import ServiceButton from "@/components/Services/ServiceButton";

import Hero from "@/components/Hero";
import Instagram from "@/components/Home/Instagram";

const services = [
  {
    title: "Sedation",
    icon: "/assets/images/sedation.svg",
    iconAlt: "/assets/images/sedationalt.svg",
    desc: "At Broadway Smiles we understand that dental visits can be challenging for some patients, and we're here to create a calming experience tailored just for you. Don't let fear or anxiety delay your visits – our Minimal Sedation Services ensure a soothing environment for routine treatments.",
    link: "/services/sedation",
    img: "/assets/images/services/sedation.png",
  },
  {
    title: "Oral Recare Program",
    icon: "/assets/images/oralrecareprogram.svg",
    iconAlt: "/assets/images/oralrecareprogramalt.svg",
    desc: "The Oral recare Program – the personalized path to dental Wellness! At Broadway Smiles, we go beyond routine check-ups; we embrace a proactive approach to optimal dental health. With our meticulous Oral Recare Program, we tailor a plan for each patient, closely monitoring their teeth and gums and occlusion.",
    link: "/services/oral-recare-program",
    img: "/assets/images/services/oral-recare.png",
  },
  {
    title: "Intra Oral Health Scan",
    icon: "/assets/images/intraoralhealth.svg",
    iconAlt: "/assets/images/intraoralhealthalt.svg",
    desc: "Where Precision Meets Prevention! At Broadway Smiles, we take immense pride in enrolling all our patients in our monitoring program. Our radiation-free scanner captures detailed 3D models of your mouth, allowing us to meticulously track any shifts in teeth, traumatic wear, and assess gum health and recession levels with accuracy.",
    link: "/services/intra-oral-scan",
    img: "/assets/images/services/intra-oral.png",
  },
  {
    title: "General Dentistry",
    icon: "/assets/images/generaldentistry.svg",
    iconAlt: "/assets/images/generaldentistryalt.svg",
    desc: "Whether you require restorations due to decay or need to restore a tooth from a break or fracture, we will help guide you through the process to the best option. We work with high-end materials that are meticulously matched to the need of your teeth, providing not only strength but also aesthetic appeal.",
    link: "/services/general-dentistry",
    img: "/assets/images/services/general-dentistry.png",
  },
  {
    title: "Professional Whitening",
    icon: "/assets/images/professionalwhitening.svg",
    iconAlt: "/assets/images/professionalwhiteningalt.svg",
    desc: "Philips Zoom Professional Whitening is a popular dental procedure designed to effectively whiten teeth and provide patients with a brighter, whiter smile. The procedure involves the use of a hydrogen peroxide-based gel and an LED light source.",
    link: "/services/professional-whitening",
    img: "/assets/images/services/professional-whitening.png",
  },
  {
    title: "Botox treatment",
    icon: "/assets/images/boxtoxtreatment.svg",
    iconAlt: "/assets/images/boxtoxtreatmentalt.svg",
    desc: "At Broadway smiles, we offer specialized Botox services designed to provide both therapeutic relief and aesthetic enhancement. Our experienced dentist combines precision and expertise to safely administer the neurotoxin",
    link: "/services/botox-treatment",
    img: "/assets/images/services/botox-treatment.png",
  },
];

export const metadata = {
  title: "Comprehensive Dental Services | Broadway Smiles Clinic",
  description:
    "Friendly & professional family dental services at Broadway Smiles, ensure top-notch care for your oral health and a brighter smile for you and your loved ones.",
  metadataBase: new URL("https://broadwaysmiles.ca"),
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Comprehensive Dental Services | Broadway Smiles Clinic",
    description:
      "Friendly & professional family dental services at Broadway Smiles, ensure top-notch care for your oral health and a brighter smile for you and your loved ones.",
    url: "services",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const Services = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col">
        <Hero
          title="SERVICES"
          imageUrl="/assets/images/banner/banner-visit.jpg"
          page="Services"
        />
        <p className="md:text-xl text-center m-auto italic max-w-[50%] flex items-center justify-center mb-10 relative h-64">
          <span className="absolute z-10" style={{ width: "90vw" }}>
            Broadway smiles is dedicated to comprehensive, safe, and comfortable
            oral health care. We prioritize your well-being with advanced
            dentistry, top-quality equipment, a cozy office, and a friendly
            staff, ensuring painless and exceptional dental experiences.
          </span>
          <img
            src="/assets/images/teethbackground.svg"
            className=" inset-0 w-full h-full object-none"
            alt="Background Image"
          />
        </p>

        <div>
          <div className="flex flex-wrap justify-center items-center gap-5 max-w-[1200px] m-auto">
            {services.map((item, index) => (
              <ServiceButton Content={item} />
            ))}
          </div>
        </div>
      </section>
      <Instagram />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Services;
