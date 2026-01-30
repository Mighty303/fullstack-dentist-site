"use client";
import { IonIcon } from "@ionic/react";
import { chevronUpOutline } from "ionicons/icons";
import React, { useState, useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

const ScrollButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const payload = {
      event: "buttonClicked",
      action: "scrollToTop",
    };

    sendGTMEvent(payload);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`${
        showScroll ? "visible" : "invisible"
      } drop-shadow-2xl border-2 fixed bottom-0 right-3 z-50 bg-[#0184C9] p-4 rounded-full text-lg text-white hover:opacity-70 my-12 flex items-center gap-1 mx-auto justify-center`}
      onClick={scrollToTop}
    >
      <IonIcon icon={chevronUpOutline} />
      {/* <a className='font-bold' >Back to top</a> */}
    </button>
  );
};

export default ScrollButton;
