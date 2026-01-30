import React from "react";
import Faq from "@/components/Faq";

const FaqContainerBlue = ({ arr, location }) => {
  return (
    <section className="pt-14 my-14 w-full bg-[#E5F6FF] py-8">
      <div className="flex flex-col justify-center items-center text-start">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold text-center">
          Frequently Asked <span className="text-[#0184C9]">Questions</span>
        </h2>
        <Faq arr={arr} noBorder={true} location={location} />
      </div>
    </section>
  );
};

export default FaqContainerBlue;
