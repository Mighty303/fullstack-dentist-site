"use client";

import React from "react";
import dynamic from "next/dynamic";

const VirtualTour = dynamic(
  () => import("@/components/VirtualTour"),
  { ssr: false }
);

const VirtualTourPage = () => {
  return (
    <>
      <VirtualTour
        src="https://avena-tech.github.io/virtual-tour-img/virtual_tour.jpg"
        initialYaw={135}
        initialPitch={0}
      />
    </>
  );
};

export default VirtualTourPage;
