import React from "react";
import Header from "@/components/Navbar/Header";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";
import BlueSection from "@/components/BlueSection";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Instagram from "@/components/Home/Instagram";
import FaqContainerWhite from "@/components/FaqContainerWhite";
import BeforeAfterCard from "@/components/Invisalign/BeforeAfter";

const invisalignFAQ = [
  {
    index: 1,
    label: "How often should I wear my Invisalign aligners?",
    content:
      "For optimal results, it is recommended to wear your aligners for 20-22 hours per day, only removing them for eating, drinking, and oral hygiene.",
  },
  {
    index: 2,
    label: "Can I eat with my Invisalign aligners in place?",
    content:
      "The trays are strong enough to allow you to eat with them, however they may get scratches or stained from the food. If you choose to eat with them, it is mandatory to take them out after your meal to clean the trays and to clean your teeth.",
  },
  {
    index: 3,
    label: "Can I drink with my Invisalign aligners in place?",
    content:
      "Drinking water is safe. For any other drink, it is recommended to take them off to drink or to drink with the trays on but it is mandatory to take the trays after, rinse and clean the trays and your teeth. Especially if you are drinking juice, pop, wine, or tea &amp; coffee with sugar or cream.",
  },
  {
    index: 4,
    label: "How long does Invisalign treatment typically take?",
    content:
      "Treatment duration varies depending on individual cases. On average, it takes about 12-18 months, but this can be longer or shorter based on your specific needs.",
  },
  {
    index: 5,
    label:
      "Are there any restrictions on the types of cases Invisalign can treat?",
    content:
      "Invisalign is effective for a wide range of orthodontic issues, but severe cases may require alternative treatments. Our dentist will assess your eligibility during the consultation.",
  },
  {
    index: 6,
    label: "Is Invisalign suitable for teenagers?",
    content:
      "Yes, Invisalign offers a specific line designed for teenagers, addressing the unique orthodontic needs of younger patients.",
  },
  {
    index: 7,
    label: "Will Invisalign aligners affect my speech?",
    content:
      "Initially, you may experience a slight adjustment period as you get used to wearing the aligners. However, most patients adapt quickly, and any impact on speech is usually temporary.",
  },
  {
    index: 8,
    label: "How do I clean my Invisalign aligners?",
    content:
      "Cleaning your aligners is simple. Rinse them with lukewarm water and use a soft toothbrush to gently brush away any debris. Avoid using hot water, as it can deform the aligners. Specialized cleaning crystals or solutions can also be used as recommended.",
  },
  {
    index: 9,
    label:
      "Can I still play musical instruments or participate in contact sports while wearing Invisalign?",
    content:
      "Yes, you can continue to play musical instruments and participate in most sports with Invisalign. If you are involved in contact sports, it is advisable to use a protective mouthguard, which can be custom-made to fit over your aligners.",
  },
  {
    index: 10,
    label: "What happens if I lose or damage one of my Invisalign aligners?",
    content:
      "If you lose or damage an aligner, contact our office immediately. Depending on your stage of treatment, we will advise whether to move on to the next set of aligners or wear the previous set until a replacement is provided. Never skip ahead without consulting our team.",
  },
  // Add more options as needed
];

const dentisteries = [
  {
    imageUrl: "assets/images/icons/invisalign/digital-impressions.png",
    title: "Digital Impressions",
    desc: "Our team will take digital impressions and records of your teeth, creating a precise 3D model of your bite.",
  },
  {
    imageUrl: "/assets/images/icons/invisalign/treatment.png",
    title: "Treatment Plan",
    desc: "The dentist will design a personalized treatment plan that maps out the gradual movement of your teeth from their current position to the final desired alignment.",
  },
  {
    imageUrl: "/assets/images/icons/invisalign/trays-fabrication.png",
    title: "Trays Fabrications",
    desc: "A series of custom aligner trays will be fabricated specifically to fit your unique dental structure.",
  },
  {
    imageUrl: "/assets/images/icons/invisalign/aligners.png",
    title: "Wearing the Aligners",
    desc: "Patients wear each set of aligners for about 20-22 hours a day, changing to a new set approximately every 7 days.",
  },
];

const beforeAfter = [
  {
    before_src: "/assets/images/before-after/PB-before.jpg",
    after_src: "/assets/images/before-after/PB-after.jpg",
    desc: "59 year old female 9 months in treatment",
  },
  {
    before_src: "/assets/images/before-after/LF-before.jpg",
    after_src: "/assets/images/before-after/LF-after.jpg",
    desc: "51 year old male, 9 months in treatment",
  },
  {
    before_src: "/assets/images/before-after/SS-before.jpg",
    after_src: "/assets/images/before-after/SS-after.jpg",
    desc: "51 year old male, 9 months in treatment",
  },
];

export const metadata = {
  title: "Invisalign Treatment Service in Vancouver BC | Broadway Smiles",
  description:
    "Broadway Smiles offers top-notch Invisalign services in Vancouver, BC. Get your perfect smile with our expert Invisalign treatment. Book your consultation today!",
  metadataBase: new URL("https://broadwaysmiles.ca"),
  keywords:
    "invisalign vancouver bc, invisalign service vancouver bc, invisalign treatment vancouver bc, invisalign vancouver, invisalign treatment",
  alternates: {
    canonical: "/invisalign",
  },
  openGraph: {
    title: "Invisalign Treatment Service in Vancouver BC | Broadway Smiles",
    description:
      "Broadway Smiles offers top-notch Invisalign services in Vancouver, BC. Get your perfect smile with our expert Invisalign treatment. Book your consultation today!",
    url: "/invisalign",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const Invisalign = () => {
  return (
    <>
      <Header />
      <div>
        <div className="mt-[2rem]">
          <Hero
            imageUrl="/assets/images/banner/banner-invisalign2.jpg"
            title="INVISALIGN"
            page="Invisalign"
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-14">
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
              Invisalign <span className="text-[#0184C9]">Dentistry</span>
            </h2>
            <p className="text-center py-6 mx-4">
              Clear aligners work by utilizing a series of custom-made,
              transparent trays that gradually shift your <br /> teeth into the
              desired position. With the following easy steps, you will start
              your journey:
            </p>
          </div>
          <Card items={dentisteries} />
        </div>
      </div>
      <BlueSection
        header={["Smileview Simulator"]}
        content={[
          `Visualize a simulation of potential results of your Invisalign journey using the SmileView app – a powerful tool that provides a personalized simulation of your post-treatment smile. It's an innovative and easy way to see the transformative impact of Invisalign before even starting.`,
        ]}
        buttonText="TRY IT NOW"
        buttonAction="tryInvisalign"
        link="https://providerbio.invisalign.com/sv/1399318#start"
        linkType="anchor"
        bg="#0184C9"
      >
        <img
          src={"/assets/images/misc/SmileView_Animation.gif"}
          className="rounded-xl object-fit shadow-md justify-end"
          alt="Smileview animation"
        />
      </BlueSection>
      <section className="bg-[#E5F6FF] py-14 flex flex-col items-center justify-center gap-8 px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold">
          Before &<span className="text-[#0184C9]"> After's</span>
        </h2>
        <p className="text-lg text-center md:text-xl max-w-7xl">
          Check out these before and after cases and see how Invisalign can
          transform your teeth and bite.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          {beforeAfter.map((card, index) => {
            return (
              <BeforeAfterCard
                before_src={card.before_src}
                after_src={card.after_src}
              >
                {card.desc}
              </BeforeAfterCard>
            );
          })}
        </div>
      </section>

      <FaqContainerWhite arr={invisalignFAQ} location={"Invisalign FAQ"} />
      <Instagram />
      <ScrollButton />

      <Footer />
    </>
  );
};

export default Invisalign;
