"use client";
import React from "react";
import ContactModal from "../ContactModal";
import { sendGTMEvent } from "@next/third-parties/google";

function Hero() {
  return (
    <section className="overflow-x-hidden flex justify-center items-center">
      <video
        src={"/assets/bws-intro-final.mp4"}
        poster={"/assets/images/videoPoster.png"}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen absolute object-cover -z-10 top-0 left-0 shadow-2xl"
      />
      {/* Grey Overlay */}
      <div className="w-full h-screen absolute top-0 left-0 bg-gray-950 opacity-60 -z-10"></div>
      <div className="w-[80%] h-screen flex flex-col justify-center items-center text-white  font-bold z-20 gap-8">
        {/* Header */}
        <h1 className="flex flex-col">
          <span className="text-center text-2xl sm:text-4xl md:text-4xl">
            WELCOME TO
          </span>
          <span className="text-center text-3xl sm:text-5xl md:text-8xl my-2 font-black">
            BROADWAY SMILES
          </span>
        </h1>
        {/* Content */}
        <div className="flex flex-col md:flex-row gap-4">
          <ContactModal location={"Hero"} />
          <a
            href="tel:604-736-7377"
            onClick={() => {
              const payload = {
                event: "buttonClicked",
                action: "phoneCall",
                location: "Hero",
              };

              sendGTMEvent(payload);
            }}
            className="flex justify-center gap-1 items-center bg-white font-normal text-lg text-[#1B9EE3] pl-4 pr-4 py-3 rounded-lg border-2 border-[#0184C9] hover:border-[#1B9EE3] duration-500 shadow-lg"
          >
            <img
              src="/assets/images/icons/phone2.png"
              alt="phone icon"
              className="pb-1"
            />
            604-736-7377
          </a>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ02yebNZzhlQRvF1hi-yRDbU"
            onClick={() => {
              const payload = {
                event: "buttonClicked",
                action: "Review",
                location: "Hero",
              };

              sendGTMEvent(payload);
            }}
            className="flex justify-center gap-1 items-center bg-white font-normal text-lg text-[#1B9EE3] pl-4 pr-4 py-3 rounded-lg border-2 border-[#0184C9] hover:border-[#1B9EE3] duration-500 shadow-lg"
          >
            Review us on Google
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
