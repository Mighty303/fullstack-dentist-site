'use client';
import React, { useState, useRef } from "react";
import MouthGuard from "@/components/Procedures/MouthGuard";
import LaserTreatment from "@/components/Procedures/LaserTreatment";
import DirectFillings from "@/components/Procedures/DirectFillings";
import CrownBridge from "@/components/Procedures/CrownBridge";
import Extraction from "@/components/Procedures/Extraction";
import RootCanal from "@/components/Procedures/RootCanal";
import PostCoreContent from "@/components/Procedures/PostCoreContent";
import CosmeticVeneers from "@/components/Procedures/CosmeticVeneers";
import { sendGTMEvent } from "@next/third-parties/google";

const ScrollableTabs = () => {
  const tabs = [
    "Direct Fillings",
    "Crowns & Bridges",
    "Cosmetic Veneers",
    "Tooth Extractions",
    "Root Canal Therapy",
    "Laser Treatment",
    "Post and Core",
    "Mouth Guards",
  ];

  const procedureContentMap = {
    0: <DirectFillings />,
    1: <CrownBridge />,
    2: <CosmeticVeneers />,
    3: <Extraction />,
    4: <RootCanal />,
    5: <LaserTreatment />,
    6: <PostCoreContent />,
    7: <MouthGuard />,
  };

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const containerRef = useRef(null);

  const handleClick = (direction) => {
    const tabWidth = containerRef.current.firstChild.offsetWidth;
    const newIndex =
      direction === "left"
        ? Math.max(selectedTabIndex - 1, 0)
        : Math.min(selectedTabIndex + 1, tabs.length - 1);
    setSelectedTabIndex(newIndex);
    containerRef.current.scrollTo({
      left: newIndex * tabWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col relative justify-center w-full">
      <div className="flex relative max-w-screen-xl self-center">
        <button
          className="absolute z-50 left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-md focus:outline-none disabled:opacity-50"
          disabled={selectedTabIndex === 0}
          onClick={() => {
            handleClick("left");
            const payload = {
              event: "procedureNav",
              action: "left",
            };
            sendGTMEvent(payload);
          }}
        >
          <img
            src="/assets/images/icons/lefttextcarousel.svg"
            alt="Left Arrow"
          />
        </button>

        <div
          ref={containerRef}
          className="flex flex-wrap px-4 w-full border-b-2 border-gray-400 items-center justify-center no-scrollbar transition duration-300 ease-in-out transform"
          style={{ margin: "0 auto", overflowX: "auto" }}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab + index} // Ensure unique key for React elements
              className={`relative px-4 py-2 rounded transition-all duration-300 ease-in-out transform flex flex-wrap${
                selectedTabIndex === index ? "text-[#0184C9]" : "text-black"
              }`}
              onClick={() => {
                setSelectedTabIndex(index);
                const payload = {
                  event: "procedureNav",
                  action: tab,
                };
                sendGTMEvent(payload);
              }}
            >
              {tab}
              {selectedTabIndex === index && (
                <div
                  className="absolute bottom-0 left-0 right-0 border-2 border-[#0184C9] transition-all duration-300 ease-in-out transform"
                  style={{ backgroundColor: "#0184C9" }}
                ></div>
              )}
            </button>
          ))}
        </div>

        <button
          className="absolute z-50 right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-md focus:outline-none disabled:opacity-50"
          disabled={selectedTabIndex === tabs.length - 1}
          onClick={() => {
            handleClick("right");
            const payload = {
              event: "procedureNav",
              action: "right",
            };
            sendGTMEvent(payload);
          }}
        >
          <img
            src="/assets/images/icons/righttextcarousel.svg"
            alt="Right Arrow"
          />
        </button>
      </div>

      <div className="mt-8">
        {procedureContentMap[selectedTabIndex] || (
          <div>No content available</div>
        )}
      </div>
    </div>
  );
};

const ProceduresNew = ({ blue }) => {
  return (
    <div className={blue ? " pt-10" : ""}>
      <div
        className={
          blue
            ? ""
            : "flex flex-col justify-center items-center my-8 mt-24 text-center"
        }
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold text-center">
          What To Expect
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold text-center">
          From <span className={"text-[#0184C9]"}>Different Procedures</span>
        </h2>
      </div>
      <ScrollableTabs />
    </div>
  );
};

export default ProceduresNew;
