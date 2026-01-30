"use client";
import Link from "next/link";
import parse from "html-react-parser";
import React from "react";
import ContactModal from "@/components/ContactModal";
import Image from "next/image";

const WhiteSection = (props) => {
  const HeaderTag = props.isHeaderH1 ? "h1" : "h2";
  const handleLinkClick = () => window.scroll(0, 0);

  // Determine the button or modal to display
  let actionElement = null;
  if (props.buttonText === "Request Appointment") {
    actionElement = <ContactModal location={props.header} />;
  } else if (props.buttonText) {
    actionElement = (
      <Link href={props.link} onClick={() => window.scroll(0, 0)}>
        <button className="bg-[#0184C9] inline-block text-white px-4 py-3 rounded-md hover:bg-[#1B9EE3] duration-500">
          {props.buttonText}
        </button>
      </Link>
    );
  }

  return (
    <section className={props.isHeaderH1 ? `pt-44 pb-14` : "py-14"}>
      <div className="flex flex-col-reverse md:flex-row md:justify-center mx-auto w-[80%] md:w-[90%] gap-12 lg:gap-24 xl:gap-28">
        <div className="flex flex-col gap-12">
          <div>
            {/* Header & Content */}
            {props.header.map((header, index) => (
              <div
                key={index}
                className={`${
                  index === 1 ? "text-[#0184C9] pt-2" : "text-black"
                }`}
              >
                <HeaderTag className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  {parse(header)}
                </HeaderTag>
              </div>
            ))}
            {props.smile ? (
              <>
                <Image
                  className="ml-36 sm:ml-0 md:ml-60 pl-2"
                  src="/assets/images/Vector.svg"
                  width={70}
                  height={22}
                  alt="smile vector"
                />
              </>
            ) : (
              <></>
            )}
          </div>

          <p className="md:text-xl max-w-2xl whitespace-pre-line leading-9">
            {props.content.map((paragraph, index) => (
              <React.Fragment key={index}>
                {parse(paragraph)}
                <br />
              </React.Fragment>
            ))}
          </p>
          {actionElement}
        </div>
        {/* Photo */}
        <div className="relative flex justify-center items-center md:w-[600px] lg:w-[700px]">
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default WhiteSection;
