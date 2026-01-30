import React from "react";
import { ReviewsCarousel } from "./ReviewsCarouselOld";

const GoogleReviews = () => {
  return (
    <section className="py-14 bg-blue-100">
      <div className="flex flex-col justify-center items-center mx-auto w-full">
        <div className="flex flex-col justify-center items-center text-center gap-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold text-start">
            Google <span className="text-[#0184C9]">Reviews</span>
          </h2>
          <p className='md:text-xl max-w-7xl text-start text-black flex gap-1'>
            Leave us a review on 
            <a 
              className='flex items-center gap-1 text-[#0184C9]' 
              target='_blank' 
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/odY85EAaz46MsmD37' 
            >Google
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
            </a>
          </p>
          <ReviewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
