"use client";
import Link from "next/link";
import parse from "html-react-parser";
import React from "react";
import ContactModal from "@/components/ContactModal";
import { sendGTMEvent } from "@next/third-parties/google";

const BlueSection = (props) => {
  const HeaderTag = props.isHeaderH1 ? "h1" : "h2";
  return (
    <section
      className={`${props.bg ? `bg-[${props.bg}]` : "bg-[#E5F6FF]"} py-14`}
    >
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row-reverse md:justify-center mx-auto w-[80%] md:w-[90%] gap-12 lg:gap-24 xl:gap-28">
        {/* Header & Content */}
        <div className="flex flex-col gap-12 justify-center">
          <HeaderTag
            className={`text-3xl sm:text-4xl md:text-5xl max-w-3xl ${
              props.bg ? "text-white" : "text-black"
            } font-bold`}
          >
            {props.header.map((header, index) => {
              const part = header.split(" ").pop();
              if (header.split(" ").includes("Clinic")) {
                <p>simulator</p>;
                return (
                  <span key={index}>
                    {" "}
                    {header.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-[#0184C9]">{part}</span>
                    <br />
                  </span>
                );
              } else {
                return (
                  <span key={index}>
                    {header}
                    <br />
                  </span>
                );
              }
            })}
          </HeaderTag>
          {props.contentType === "list" ? (
            <ol className="list-decimal pl-12 text-xl space-y-1 max-w-2xl">
              {props.content.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          ) : (
            <p
              className={`md:text-xl max-w-2xl whitespace-pre-line leading-9 ${
                props.bg ? "text-white" : "text-black"
              }`}
            >
              {props.content.map((paragraph, index) => (
                <React.Fragment key={index}>
                  {parse(paragraph)}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}
          {props.buttonText === "REQUEST APPOINTMENT" && (
            <ContactModal location={props.header[0]} />
          )}
          {props.buttonText && props.linkType === "anchor" ? (
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button
                onClick={() => {
                  const payload = {
                    event: "buttonClicked",
                    action: props.buttonAction,
                    location: props.header[0],
                  };
                  sendGTMEvent(payload);
                }}
                className={`${
                  props.bg
                    ? "bg-white text-[#0184C9] font-bold"
                    : "bg-[#0184C9] text-white"
                } inline-block  px-4 py-3 rounded-md hover:bg-[#1B9EE3] duration-500`}
              >
                {props.buttonText}
              </button>
            </a>
          ) : (
            props.buttonText &&
            props.buttonText !== "REQUEST APPOINTMENT" && (
              <Link href={props.link} onClick={() => window.scroll(0, 0)}>
                <button className="bg-[#0184C9] inline-block text-white px-4 py-3 rounded-md hover:bg-[#1B9EE3] duration-500">
                  {props.buttonText}
                </button>
              </Link>
            )
          )}
        </div>
        {/* Team Photo */}
        <div className="flex justify-start items-center md:w-[600px] lg:w-[700px]">
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default BlueSection;
