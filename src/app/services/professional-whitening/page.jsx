import React from "react";
import Header from "@/components/Navbar/Header";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";
import WhiteSection from "@/components/WhiteSection";
import FaqContainerWhite from "@/components/FaqContainerWhite";
import { sendGTMEvent } from "@next/third-parties/google";
import WhiteningCTA from "@/components/Services/WhiteningCTA";
import BlueSection from "@/components/BlueSection";
import Script from "next/script";

const radioData = [
  {
    index: 1,
    label: "Is brushing my teeth once a day enough?",
    content:
      "There is a common misconception that brushing at night only is enough to maintain good oral hygiene. However, it is necessary to brush the teeth twice a day, once in the morning and once at night.",
  },
  {
    index: 2,
    label:
      "What kind of toothbrush should I brush with. Soft, medium or hard bristled toothbrush?",
    content:
      "We always recommend a Soft or Extra Soft toothbrush when brushing the teeth. The soft bristles are more gentle on the gums and are flexible enough to brush off the plaque stuck on the tooth by the gum margin.",
  },
  {
    index: 3,
    label: "Manual vs Electric Toothbrush",
    content:
      "Both manual and electric toothbrushes can effectively clean the teeth from plaque if used properly. Some benefits of the electric toothbrush is: it applies the correct amount of brushing force on the teeth, it runs for two minutes at a time making sure all surfaces of the teeth are targeted, and the consistent brushing power of the brush will be ensure deep cleaning of the back teeth.",
  },
  {
    index: 4,
    label: "How often should I visit the clinic for a dental cleaning?",
    content:
      "It is recommended for all patients to attend a professional dental cleaning session with our registered dental hygienists at least every six months. Even if we brush and floss our teeth every day, there are deep areas between or behind our teeth that will only be reached and cleaned by our dental scalers and instruments.",
  },
  {
    index: 5,
    label: "What are my options for professional teeth bleaching?",
    content:
      "Professional teeth bleaching can be done in the dental office or with a take home kit. Both of these approaches typically use a peroxide-based bleach solution to bleach your teeth.",
  },
  {
    index: 6,
    label: "What are the advantages of Professional in office bleaching?",
    content:
      "Professional in office bleaching provides the most immediate results and has the most research proving its effectiveness.",
  },
  {
    index: 7,
    label: "What is the take home kit?",
    content:
      "These include your own custom-made teeth trays, plus a supply of peroxide based bleaching solution. The trays are worn for a period of time each day according to your dentist’s instructions. Generally, the take home kit lasts a few weeks during which your teeth become noticeably lighter.",
  },
  {
    index: 8,
    label: "What are the risks of teeth bleaching?",
    content:
      "There is a risk that your teeth or gums will become sensitive to the bleach solution and the treatment may need to be discontinued before the desired color is achieved.",
  },
  {
    index: 9,
    label: "Is the sensitivity from whitening temporary?",
    content:
      "In the most extreme case, teeth bleaching may lead to such a tooth sensitivity that root canal treatment is required in order for the sensitivity to resolve.",
  },
  {
    index: 10,
    label: "What if I have fillings or crowns on my teeth?",
    content:
      "Teeth bleaching will not alter the color of your existing dental restorations. Sometimes dental work must be replaced if you want to match the color of your new lighter teeth.",
  },
  {
    index: 11,
    label: "How long will the whitening last?",
    content:
      "The whitening will last until the teeth are stained again. Those people with poor dental home care or diets containing foods that stain such as coffee, red wine, tea or berries may find that their teeth become stained again more quickly than expected. Normally teeth bleaching must be repeated periodically to maintain the brightness of your smile.",
  },
  // Add more options as needed
];

export const metadata = {
  title: "Zoom Professional Dental Teeth Whitening in Vancouver",
  description:
    "Find professional teeth whitening at Broadway Smiles in Vancouver. Get brighter teeth with Zoom professional whitening services. Book your appointment today!",
  metadataBase: new URL("https://broadwaysmiles.ca/services"),
  alternates: {
    canonical: "/professional-whitening",
  },
  keywords:
    "dental teeth whitening, zoom professional whitening, professional teeth whitening near me, teeth whitening Vancouver",
  openGraph: {
    title: "Zoom Professional Dental Teeth Whitening in Vancouver",
    description:
      "Find professional teeth whitening at Broadway Smiles in Vancouver. Get brighter teeth with Zoom professional whitening services. Book your appointment today!",
    url: "/professional-whitening",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

const ProfessionalWhitening = () => {
  const sendEvent = (action) => {
    const payload = {
      event: "buttonClicked",
      action: action,
      location,
    };

    // console.log(payload);
    sendGTMEvent(payload);
  };
  return (
    <>
      <Header />
      <WhiteSection
        header={["Zoom Professional Whitening"]}
        isHeaderH1={true}
        content={[
          "Philips Zoom Professional Whitening is a popular dental procedure designed to effectively whiten teeth and provide patients with a brighter, whiter smile. The procedure involves the use of a hydrogen peroxide-based gel and an LED light source.",
          "",
          `Here's what to expect during your professional whitening session.
            <b>Preparation:</b> Before the whitening procedure, the dental professional will
            assess your oral health and may perform a professional cleaning to remove any surface stains and plaque.

            <b>Isolation:</b> To protect the gums and surrounding tissues, a protective
            barrier will be applied to isolate the teeth that will undergo the whitening treatment.

            <b>Application of Whitening Gel:</b> A high concentration hydrogen peroxide-based whitening gel is applied to the teeth.

            <b>Activation with LED Light:</b> The Zoom WhiteSpeed lamp will be directed
            on the teeth to activate the whitening gel. The light helps accelerate the
            breakdown of the peroxide gel, promoting the release of oxygen molecules that penetrate the enamel to break down stains in the dentin

            <b>Multiple Sessions:</b> The whitening process typically involves three
            sessions, each lasting around 15 minutes.`,
        ]}
        link="/contact"
      >
        <img
          src={"/assets/images/zoom-whitening.png"}
          alt="Zoom Professional Whitening"
        />
      </WhiteSection>
      <BlueSection
        header={["Disclaimer"]}
        content={[
          `Despite its effectiveness and safety under professional supervision, it's important to note that the procedure has its limitations. The degree of whitening achieved varies among individuals, and results may not be as dramatic for certain types of stains or discoloured teeth.
            
            Additionally, some patients may experience tooth sensitivity during or after the whitening procedure. This sensitivity is usually temporary and can be managed with desensitizing agents provided by the clinic. It's essential for individuals considering this cosmetic procedure to have realistic expectations and to consult with their dentist with any questions.`,
        ]}
      >
        <img
          src={"/assets/images/LA-zoom-whitening.png"}
          alt="Whitening image 2"
        />
      </BlueSection>
      <FaqContainerWhite
        arr={radioData}
        location={"Professional Whitening FAQ"}
      />
      <section className="bg-[#E5F6FF] px-12 py-14 my-14 flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold">
          Cases
        </h2>
        <p className="text-lg text-left md:text-xl max-w-7xl">
          Check out these before and after examples of what one session of Zoom
          Professional Whitening can do.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            className="w-96 h-48 rounded-lg object-cover "
            alt="Before zoom treatment ex1"
            src={"/assets/images/before-after/KB-whitening-before.jpg"}
          />
          <img
            className="w-96 h-48 rounded-lg object-cover "
            alt="After zoom treatment ex1"
            src={"/assets/images/before-after/KB-whitening-after.jpg"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            className="w-96 h-48 rounded-lg object-cover"
            alt="Before zoom treatment ex2"
            src={"/assets/images/before-after/LL-whitening-before.jpg"}
          />
          <img
            className="w-96 h-48 rounded-lg object-cover"
            alt="After zoom treatment ex2"
            src={"/assets/images/before-after/LL-whitening-after.jpg"}
          />
        </div>
        {/* <div>
          <WhiteningCTA/>
        </div> */}
      </section>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default ProfessionalWhitening;
