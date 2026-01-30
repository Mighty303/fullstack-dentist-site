"use client";
import React from "react";
import TransparentHeader from "@/components/Navbar/TransparentHeader";
import Hero from "@/components/Home/Hero";
import MeetTeam from "@/components/Home/MeetTeam";
import GoogleReviews from "@/components/Home/GoogleReviews";
import Instagram from "@/components/Home/Instagram";
import Footer from "@/components/Footer";
import GoogleMaps from "@/components/Home/GoogleMaps";

import WhiteSection from "@/components/WhiteSection";
import BlueSection from "@/components/BlueSection";
import ScrollButton from "@/components/ScrollButton";
import IntraOralHealthScan from "@/components/Home/IntraOralHealthScan";

import dynamic from "next/dynamic";

const ProceduresNew = dynamic(() => import('@/components/Home/ProceduresNew'), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <TransparentHeader />
      <Hero />
      <WhiteSection
        id="changeHeader"
        header={["We Create", "Beautiful Smiles"]}
        smile={true}
        content={[
          `Welcome to Broadway Smiles where your healthy smile is our top priority! Step into a comfortable space of dental excellence, where state-of-the-art equipment meets advanced techniques, ensuring the overall well-being of your teeth, gums and bite.

               At Broadway Smiles, we go beyond routine check-ups – we are dedicated to the art of prevention, safeguarding your dental health with precision and care. Our commitment starts by close monitoring your overall health to ensure a radiant smile that lasts a lifetime.
            `,
        ]}
      >
        <img src="/assets/images/hero-image.jpg" alt="team photo" />
      </WhiteSection>
      <BlueSection
        header={["Welcome to Our Clinic"]}
        content={[
          "I'm Dr. Dhia, your dedicated dentist and proud owner of this community-focused dental clinic nestled in the heart of beautiful Kitsilano. As a preventative dentist, my passion is to empower my patients with the knowledge to prevent dental issues. At Broadway Smiles, we believe in the power of education to pave the way for the best oral health. It's not just about fixing problems; it's about preventing them from occurring in the first place.",
        ]}
        buttonText={"REQUEST APPOINTMENT"}
        link={"/contact"}
      >
        <img
          src="/assets/images/dhia2.png"
          className="rounded-xl w-[100%] object-cover"
          alt="Dhia"
        />
      </BlueSection>

      <WhiteSection
        header={["Located In Kitsilano"]}
        smile={false}
        isHeaderH1={false}
        content={[
          "Living in this vibrant Kitsilano neighbourhood is not just a choice; it's a privilege! We are committed to keeping our community’s smiles radiant with health and happiness. The office enjoys a prime location near UBC, ensuring a quick and convenient 30-minute bus ride to the vibrant Kitsilano area. By opting for the 99 bus route, specifically heading to Commercial Broadway, you'll find yourself effortlessly arriving at the clinic. This strategic placement underscores our dedication to offering accessible services, particularly for students, and we look forward to welcoming you with ease.",
        ]}
      >
        <div className="w-full h-[420px] sm:h-[420px] md:h-[220px] lg:h-[500px] relative">
          <img
            src="/assets/images/blue-square.png"
            className="w-11/12 h-[400px] sm:h-[400px] md:h-[200px] lg:h-[450px] absolute top-0 right-0 rounded-2xl"
            alt="blue-square"
          />
          <div className="w-11/12 h-[400px] sm:h-[400px] md:h-[200px] lg:h-[450px] bottom-0 left-0 absolute">
            <GoogleMaps />
          </div>
        </div>
      </WhiteSection>
      <MeetTeam />
      <GoogleReviews />
      <IntraOralHealthScan />
      <ProceduresNew />
      <Instagram />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Home;
