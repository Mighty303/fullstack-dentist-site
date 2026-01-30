import React from "react";
import Link from "next/link";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";
import { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const dropDown = [
  { label: "Sedation", link: "/services/sedation" },
  { label: "Oral Recare Program", link: "/services/oral-recare-program" },
  { label: "Intra Oral Health Scan", link: "/services/intra-oral-scan" },
  { label: "General Dentistry", link: "/services/general-dentistry" },
  { label: "Professional Whitening", link: "/services/professional-whitening" },
  { label: "Botox Treatment", link: "/services/botox-treatment" },
];

const ServicesDropDownMobile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group flex items-center text-lg md:text-lg hover:text-[#0184C9] hover:duration-500"
      onClick={() => window.scroll(0, 0)}
    >
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-0"
      >
        <div className="flex items-center justify-start space-x-2 space-y-1 px-4">
          <Link
            href="/services"
            className="text-lg text-black md:text-xl group-hover:text-[#0184C9] group-hover:duration-500"
          >
            Services
          </Link>
          <CollapsibleTrigger className="flex items-center" asChild>
            <button variant="ghost" size="sm" className="w-9 p-0">
              <IonIcon icon={chevronDownOutline} />
              <span className="sr-only">Toggle</span>
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <ul className="text-md flex flex-col pl-6 bg-white w-full rounded">
            {dropDown.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="text-black hover:text-[#0184C9] hover:bg-gray-200 duration-200 w-full p-2"
                  onClick={() => window.scroll(0, 0)}
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ServicesDropDownMobile;
