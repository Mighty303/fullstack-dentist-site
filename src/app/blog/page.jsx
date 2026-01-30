"use client";

import React from "react";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";

const blogs = [
  {
    author: "Admin",
    img: "/assets/images/blogs/blog1.png",
    description: "When Should You Replace Your Toothbrush?",
    date: "JUL 5 - 2023",
    link: "/services/sedation",
  },
  {
    author: "Admin",
    img: "/assets/images/blogs/blog2.png",
    description: "How Long Does Invisalign Take?",
    date: "JUL 3 - 2023",
    link: "/services/oral-recare-program",
  },
  {
    author: "Admin",
    img: "/assets/images/blogs/blog3.png",
    description: "Why You Should have Regular Dental Check-ups",
    date: "JUN 5 - 2023",
    link: "/services/intra-oral-scan",
  },
  {
    author: "Admin",
    img: "/assets/images/blogs/blog4.png",
    description: "Is the Zoom Whitening Procedure Painful or Unpleasant?",
    date: "JUN 28 - 2023",
    link: "/services/general-dentistry",
  },
  {
    author: "Admin",
    img: "/assets/images/blogs/blog5.png",
    description: "How to Maintain Your Results After Zoom Whitening",
    date: "JUN 7 - 2023",
    link: "/services/professional-whitening",
  },
  {
    author: "Admin",
    img: "/assets/images/blogs/blog6.png",
    description: "Why is Cleaning Your Invisalign Aligners Important?",
    date: "MAY 30 - 2023",
    link: "/services/botox-treatment",
  },
];

export default function Blog() {
  return (
    <div>
      <Header />
      <Hero
        imageUrl="/assets/images/banner/banner-blogs.jpg"
        page="blog"
        title="BLOG"
      />
      <section className="py-14 mx-6 md:mx-28 flex flex-col items-center gap-14">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-4 items-center justify-center w-[80%] bg-[#E5F6FF] p-8 rounded-2xl">
            <h2 className="text-2xl text-black font-semibold">Disclaimer</h2>
            <p className="md:text-xl">
              {
                "The entire contents of this website are based upon the opinions of Dr. Dhia Mahmud, unless otherwise noted. Individual articles are based upon the opinions of the respective author, who retains copyright as noted. The information on this website is not intended to replace a one-on-one relationship with a qualified health care professional and is not intended as medical advice. It is intended as a sharing of knowledge and information from the research and experience of Dr. Dhia Mahmud."
              }
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[80%]">
          {blogs.map((blog, index) => (
            <Link
              href={blog.link}
              key={index}
              className="relative flex flex-col gap-0 shadow-2xl rounded-2xl transition-transform ease-out delay-150 hover:-translate-y-2 hover:scale-100 duration-400"
              onClick={() => window.scroll(0, 0)}
            >
              <img
                className="w-[100%] rounded-t-2xl active:opacity-80"
                alt={blog.author}
                src={blog.img}
              />
              <h2 className="font-bold text-xl text-center p-2 bg-[#0184C9] text-white">
                {blog.date}
              </h2>
              <div className="flex flex-col items-start gap-4 px-4 pt-4 pb-16">
                <h3 className="text-2xl font-semibold">{blog.description}</h3>
                <p className="absolute bottom-5 text-lg font-bold text-[#0184C9] hover:text-[#0184C9]">
                  {blog.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
