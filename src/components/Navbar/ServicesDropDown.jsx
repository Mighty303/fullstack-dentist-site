import React from "react";
import Link from "next/link";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";

const dropDown = [
  { label: "Sedation", link: "/services/sedation" },
  { label: "Oral Recare Program", link: "/services/oral-recare-program" },
  { label: "Intra Oral Health Scan", link: "/services/intra-oral-scan" },
  { label: "General Dentistry", link: "/services/general-dentistry" },
  { label: "Professional Whitening", link: "/services/professional-whitening" },
  { label: "Botox Treatment", link: "/services/botox-treatment" },
];

const ServicesDropDown = (props) => {
  return (
    <div
      className="group flex items-center dropdown dropdown-hover mx-4 my-6 md:my-0 text-lg md:text-lg hover:text-[#0184C9] hover:duration-500"
      onClick={() => window.scroll(0, 0)}
    >
      <div>
        <label
          className={`${props.color} text-lg md:text-xl group-hover:text-[#0184C9] group-hover:duration-500`}
          tabIndex={0}
        >
          <Link href="/services">SERVICES</Link>
        </label>
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-72">
          {dropDown.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  tabIndex={0}
                  href={item.link}
                  className=" text-black hover:text-[#0184C9] duration-200 text-lg"
                  onClick={() => window.scroll(0, 0)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <label
        className="ml-1 mt-2 group-hover:text-[#0184C9] group-hover:duration-500"
        tabIndex={0}
      >
        <IonIcon icon={chevronDownOutline} />
      </label>
    </div>
  );
};

export default ServicesDropDown;
