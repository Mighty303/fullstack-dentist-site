"use client";
import React from "react";
import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";

const google_reviews = [
  {
    name: "Lynda Marie Neilson",
    description:
      "Awesome welcoming dentist office that plays fun music when the dentist works on you!  You pick the artist and a variety of songs will be played.  Hygienists are great to and LISTEN to patient needs and concerns.",
    pfp: "/assets/images/reviews/lynda.png",
  },
  {
    name: "Jose Mario Ventura",
    description:
      "Great experience from start to end. Warm and polite on the telephone, welcoming and efficient at the front desk, and a great service on the dental chair. Recommended!",
    pfp: "/assets/images/reviews/jose.png",
  },
  {
    name: "Shalaw Kuestany",
    description:
      "Dr. Dhia one of the best doctor in Vancouver very great job and very nice stuff I really recommended definitely I will coming back 100%",
    pfp: "/assets/images/reviews/shalaw.png",
  },
  {
    name: "Klimentiy Kenzikeyev",
    description:
      "Nice dental clinic with a great customer service. Dr. Dhia is a pro at his craft.",
    pfp: "/assets/images/reviews/klimentiy.png",
  },
  {
    name: "Ahmed Ali",
    description:
      "Dr. Dhia has been patient with me, and is very knowledgeable. This is my go-to clinic!",
    pfp: "/assets/images/reviews/ahmed.png",
  },
  {
    name: "Ali Yekta",
    description:
      "I usually have a hard time when I go to the dentist, but with with Dr. Dhia it was very easy. He was caring and considerate during the procedure. He always asked how I felt and listened to my concerns, which made me feel comfortable. I would definitely recommend him to my friends and family!",
    pfp: "/assets/images/reviews/ali.png",
  },
];

export function ReviewsCarousel() {
  const [shuffedReviews, setShuffedReviews] = useState([]);
  useEffect(() => {
    function randomizeReviews() {
      for (let i = google_reviews.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [google_reviews[i], google_reviews[j]] = [
          google_reviews[j],
          google_reviews[i],
        ];
      }
    }
    const shuffled = randomizeReviews();
    setShuffedReviews(shuffled);
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-7xl"
    >
      <CarouselContent className="py-12 px-4 md:p-7">
        {google_reviews.map((review, index) => (
          <CarouselItem key={index} className="basis-80 md:basis-1/2">
            <div
              key={index}
              className="grid grid-cols-1 rounded-lg carousel-item items-start justify-center p-2 sm:p-6 md:p-12 gap-2 h-full md:h-2/3 bg-white border-none"
            >
              <div className="flex gap-4">
                <img
                  src={review.pfp}
                  alt={review.name}
                  className="object-cover rounded-full w-16 h-16"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-medium">{review.name}</h3>
                  <div className="flex gap-1 text-orange-400">
                    <IonIcon icon={star}></IonIcon>
                    <IonIcon icon={star}></IonIcon>
                    <IonIcon icon={star}></IonIcon>
                    <IonIcon icon={star}></IonIcon>
                    <IonIcon icon={star}></IonIcon>
                  </div>
                </div>
              </div>
              <p className="text-gray-500">{review.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious location={"Google Reviews"} />
      <CarouselNext location={"Google Reviews"} />
    </Carousel>
  );
}
