"use client";
import React, { useState } from "react";
import "./styles.css";
import Link from "next/link";

import { sendGTMEvent } from "@next/third-parties/google";

const ServiceButton = ({ Content }) => {
  const { title, icon, iconAlt, desc, link, img } = Content;
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = (index) => {
    setExpanded((prev) => {
      return !prev;
    });
  };

  return (
    <Link
      href={link}
      className="h-[384px] w-[360px] m-3 md:m-0 lg:m-0 group border-2 border-[#0184C9] rounded-2xl text-center overflow-hidden relative"
      onClick={() => {
        const payload = {
          event: "servicesNav",
          action: title,
        };
        sendGTMEvent(payload);
      }}
    >
      <div className="p-3 pb-5 h-full absolute flex flex-col justify-center items-center lg:p-10 bg-white group-hover:bg-blue-500 group-hover:bg-opacity-80 ">
        <div className="my-5">
          <img src={icon} alt={title} className="group-hover:hidden" />
          <img src={iconAlt} alt={title} className="hidden group-hover:block" />
        </div>

        <h4 className="text-[18px] font-bold py-2 group-hover:text-white">
          {title}
        </h4>
        <p className="group-hover:text-white">
          {expanded ? desc : `${desc.slice(0, 100)}...`}
        </p>
        <button
          className="text-[#0184C9] mt-2 group-hover:text-white"
          // onClick={toggleDescription}
        >
          {expanded ? "READ LESS" : "READ MORE"}
        </button>
      </div>
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </Link>
  );
};

export default ServiceButton;
