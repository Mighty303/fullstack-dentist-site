import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const team_photos = [
  {
    name: "Dr. Dhia Mahmud",
    title: "Doctor of Dental Medicine",
    img: "/assets/images/staff-photos/our-team-compressed/dhia2.jpg",
  },
  {
    name: "Dr. Asif Tejani",
    title: "Doctor of Dental Medicine",
    // img: '/assets/images/staff-photos/our-team-compressed/asif2.jpg'
    img: "/assets/images/staff-photos/doctors/asif-whitebg2.png",
  },
  {
    name: "Melanie Lee",
    title: "Registered Dental Hygienist",
    img: "/assets/images/staff-photos/our-team-compressed/melanie2.jpg",
  },
  {
    name: "Jen Pendleton",
    title: "Registered Dental Hygienist",
    img: "/assets/images/staff-photos/our-team-compressed/jen2.jpg",
  },
  {
    name: "Anabelle Baquero",
    title: "Certified Dental Assistant",
    img: "/assets/images/staff-photos/our-team-compressed/assistants/anabelle.jpg",
  },
  {
    name: "Lois Locherty",
    title: "Certified Dental Assistant",
    img: "/assets/images/staff-photos/our-team-compressed/assistants/lois.jpg",
  },
  {
    name: "Aisling Keane",
    title: "Dental Assistant",
    img: "/assets/images/staff-photos/our-team-compressed/assistants/aisling.jpg",
  },
  {
    name: "Oxana Popkova",
    title: "Office Administrator",
    img: "/assets/images/staff-photos/our-team-compressed/front-desk/oxana2.jpg",
  },
  {
    name: "Alifa Rachma",
    title: "Office Administrator",
    img: "/assets/images/staff-photos/our-team-compressed/front-desk/alifa2.jpg",
  },
];

export function TeamCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-5/6 md:w-full max-w-7xl"
    >
      <CarouselContent>
        {team_photos.map((photo, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div
              key={index}
              className="relative flex flex-col items-center justify-center"
            >
              <img
                src={photo.img}
                alt={photo.name}
                className="object-cover rounded-lg w-full min-h-[25rem] max-h-[25rem] sm:w-2/3 sm:min-h-[30rem] sm:max-h-[30rem] md:w-full md:min-h-[30rem] md:max-h-[30rem] lg:min-h-[25rem] lg:max-h-[25rem]"
              />
              <div className="absolute bottom-0 text-white bg-white rounded-b-lg p-4 w-full sm:w-2/3 md:w-full">
                <h3 className="text-xl font-medium text-[#0184C9]">
                  {photo.name}
                </h3>
                <p className="text-gray-400">{photo.title}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious location={"Team Carousel"} />
      <CarouselNext location={"Team Carousel"} />
    </Carousel>
  );
}
