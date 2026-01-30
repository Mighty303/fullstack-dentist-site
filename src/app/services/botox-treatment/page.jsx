import React from "react";
import Header from "@/components/Navbar/Header";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";
import WhiteSection from "@/components/WhiteSection";
import FaqContainerWhite from "@/components/FaqContainerWhite";

import { botoxFaq, botoxOptions } from "@/data/botoxTreatment";

export const metadata = {
  title: "Botox for Migraines & Treatment in Vancouver | Broadway Smiles",
  description:
    "Experience effective Botox treatment for migraines in Vancouver. Broadway Smiles offers neurotoxin injections to relieve chronic migraines. Visit our website.",
  metadataBase: new URL("https://broadwaysmiles.ca/services"),
  alternates: {
    canonical: "/botox-treatment",
  },
  keywords:
    "botox for migraines vancouver, botox treatment vancouver, botox treatment, botox for migraines",
  openGraph: {
    title: "Botox for Migraines & Treatment in Vancouver | Broadway Smiles",
    description:
      "Experience effective Botox treatment for migraines in Vancouver. Broadway Smiles offers neurotoxin injections to relieve chronic migraines. Visit our website.",
    url: "/botox-treatment",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const Botox = () => {
  return (
    <>
      <Header />
      <WhiteSection
        header={["Botox Treatment"]}
        isHeaderH1={true}
        content={[
          "At Broadway smiles, we offer specialized Botox services designed to provide both therapeutic relief and aesthetic enhancement. Our experienced dentist combines precision and expertise to safely administer the neurotoxin",
        ]}
        buttonText="Request Appointment"
        link="/contact"
      >
        <img src={"/assets/images/botox-hero.png"} alt="botox" />
      </WhiteSection>
      <section className="bg-[#E5F6FF] py-14">
        <div className="flex flex-col justify-center items-center text-center gap-14 mx-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold">
            Who can benefit from a Botox treatment?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-8">
            {botoxOptions.map((item, index) => (
              <div className="flex flex-col items-start gap-4" key={index}>
                <img src={item.imgSrc} alt="Botox" />
                <h3 className="text-2xl text-black font-medium">
                  {item.title}
                </h3>
                <p className="text-lg text-start leading-9">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-14 py-14 px-12">
        <div className="flex flex-col justify-center items-center text-center gap-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold">
            Before and After Botox Lip Treatment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              className="w-72 h-40 md:w-96 md:h-60 rounded-lg object-cover"
              src={"/assets/images/botox/SM-lip-botox-before.jpg"}
              alt="Botox treatment before"
            />
            <img
              className="w-72 h-40 md:w-96 md:h-60 rounded-lg object-cover"
              src={"/assets/images/botox/SM-lip-botox-after.jpg"}
              alt="Botox treatment after"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#E5F6FF] py-14">
        <div className="flex flex-col items-center text-start gap-10 mx-12 sm:mx-18 md:mx-18 lg:mx-36">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold">
            Safety First: Understanding Botox
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-2xl text-black max-w-6xl text-start">
              Botox is FDA-approved and has a long-standing track record of
              safety when administered by trained professionals. However, it's
              essential to be aware of its limitations and potential risks:
            </p>
            <ul className="flex flex-col text-xl text-black max-w-6xl text-start list-disc pl-14">
              <li>
                <b>Temporary Results:</b> Botox results are temporary and
                typically last for a few months. Regular maintenance treatments
                may be required for continued
              </li>
              <li>
                <b>Bruising or Swelling:</b> Mild bruising or swelling at the
                injection site is possible. This is usually temporary and
                resolves on its own.
              </li>
              <li>
                <b>Allergic Reactions:</b> Although rare, allergic reactions are
                possible. It's crucial to inform our team of any known allergies
                or sensitivities.
              </li>
              <li>
                <b>Uneven Results:</b> Achieving symmetry is an art, and
                individual responses to Botox may vary. Our skilled dentist
                strives for optimal results but acknowledges individual
                differences.
              </li>
              <li>
                <b>Limited Scope:</b> Botox is effective for specific concerns,
                but it may not address all facial aging issues. Our dentist will
                discuss realistic expectations during the consultation.
              </li>
            </ul>

            <div></div>

            <h3 className="text-2xl text-black text-start">
              After your Botox treatment:
            </h3>
            <ul className="flex flex-col list-disc pl-14">
              <li className="text-xl text-black max-w-6xl text-start">
                Do <b>NOT</b> manipulate the treated area for 3 hours following
                treatment
              </li>
              <li className="text-xl text-black max-w-6xl text-start">
                Do <b>NOT</b> receive facial/ laser treatments or
                microdermabrasion after Neurotoxin injections for at least 10
                days.
              </li>
              <li className="text-xl text-black max-w-6xl text-start">
                Do <b>NOT</b> lie down for 4 hours after your Neurotoxin
                treatment. This will prevent the Neurotoxin from tracking into
                the orbit of your eye and causing drooping eyelid.
              </li>
              <li className="text-xl text-black max-w-6xl text-start">
                Do <b>NOT</b> perform activities involving straining, heavy
                lifting, or vigorous exercise for 6 hours after treatment. This
                will reduce the chance of the product dispersing from the
                injection area
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FaqContainerWhite arr={botoxFaq} location={"Botox FAQ"} />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Botox;
