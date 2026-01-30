"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";

const Instagram = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // const link = document.querySelector(
      //   '.elfsight-app-15262d03-f215-4967-b99f-ff943ff37799 a[href*="elfsight.com"]'
      // );
      const link = document.querySelector(
        '.elfsight-app-d7d65e8c-38d7-4ea9-bb03-48dfa6bc37a9 a[href*="elfsight.com"]'
      );
      if (link) {
        link.style.display = "none";
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-14">
      <div className="flex flex-col justify-center items-center mx-12 sm:mx-18 md:mx-36 gap-12">
        <div className="flex flex-row items-center justify-center ">
          <Image
            src="assets/images/icons/instagram.svg"
            className="mt-2 mr-2"
            width={35}
            height={35}
            alt="instagram icon"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold">
            Instagram
          </h2>
        </div>
        {/* <p className='md:text-xl max-w-3xl text-left'>Follow us on our social media pages to stay connected with us between visits!
Catch all the latest tips and advice for optimal oral health from our dental
professionals.</p> */}
        <div
          className="elfsight-app-d7d65e8c-38d7-4ea9-bb03-48dfa6bc37a9"
          data-elfsight-app-lazy
        ></div>
        {/* <div className='elfsight-app-d7d65e8c-38d7-4ea9-bb03-48dfa6bc37a9' data-elfsight-app-lazy></div>  */}
      </div>
    </section>
  );
};

export default Instagram;
