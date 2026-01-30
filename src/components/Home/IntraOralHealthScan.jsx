import Image from "next/image";
import React from "react";

const intraoralhealthscanlists = [
  {
    image: "assets/images/icons/routinecheckup.svg",
    title: "Routine checkup",
    description:
      "Thorough examinations to assess the health of your teeth, gums, and all oral tissues.",
  },
  {
    image: "assets/images/icons/scaling.svg",
    title: "Scaling",
    description: "to debride the deeper surfaces of your teeth.",
  },
  {
    image: "assets/images/icons/polishing.svg",
    title: "Polishing",
    description: "after scaling helps remove surface stains.",
  },
  {
    image: "assets/images/icons/flouride.svg",
    title: "Recommended Fluoride treatment",
    description: "available upon request.",
  },
  {
    image: "assets/images/icons/gums.svg",
    title: "Yearly gums assessment",
    description:
      "monitoring for gum disease and reporting quantitative readings for gum health.",
  },
  {
    image: "assets/images/icons/diagnostic.svg",
    title: "Preventive Diagnostic X-rays",
    description:
      "Early identification of potential issues such as cavities and gum disease for timely intervention.",
  },
  {
    image: "assets/images/icons/intraoral.svg",
    title: "Preventive Services",
    description:
      "Precise tracking of tooth shifting, wear, and gum recession, ensuring proactive measures to maintain your optimal oral health.",
  },
];

const IntraOralHealthScan = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col xl:flex-row items-center justify-between p-4 my-8 lg:px-16 lg:gap-16">
        <div className="mb-8 lg:mb-0 w-full">
          <img
            src="/assets/images/health-scan-poster.png"
            width={380}
            height={1140}
            alt="Intra Oral Health Scan"
            className="hidden rounded-lg shadow-lg xl:block"
          />
          <img
            src="/assets/images/health-scan-poster.png"
            alt="Intra Oral Health Scan"
            className="w-full mx-auto h-96 object-cover object-center rounded-lg shadow-lg xl:hidden"
          />
        </div>

        <div className="w-full lg:w-auto">
          <div className="mb-8 mt-4 text-center lg:text-start">
            <h3 className="text-3xl lg:text-5xl text-black font-bold">
              Preventive <span className="text-[#0184C9]">Services</span>
            </h3>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mx-4">
              {intraoralhealthscanlists.slice(0, 4).map((list, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-0"
                >
                  <img src={list.image} alt={list.title} className="w-6 mt-1" />
                  <div className="w-full md:w-72 lg:w-72">
                    <p className="font-bold">
                      {list.title}:<br/>
                      <span className="font-thin text-justify w-full">
                        {" " + list.description}
                      </span>{" "}
                    </p>
                    <p className="mb-8"></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-4">
              {intraoralhealthscanlists.slice(4).map((list, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-0 mb-4"
                >
                  <img src={list.image} alt={list.title} className="w-6 mt-1" />
                  <div className="w-full md:w-72 lg:w-72">
                    <p className="font-bold">
                      {list.title}:<br/>
                      <span className="font-thin text-justify">
                        {" " + list.description}
                      </span>{" "}
                    </p>
                    <p className="mb-8"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntraOralHealthScan;
