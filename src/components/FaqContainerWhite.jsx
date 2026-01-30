import React from "react";
import Faq from "@/components/Faq";

const FaqContainerBlue = ({ arr, location }) => {
  return (
    <section className="pt-14">
      <div className="flex flex-col justify-center items-center text-start">
        <h2 className="text-3xl text-center md:text-5xl text-black font-bold ">
          Frequently Asked <span className="text-[#0184C9]">Questions</span>
        </h2>
        <Faq arr={arr} location={location} />
      </div>
    </section>
  );
};

export default FaqContainerBlue;
