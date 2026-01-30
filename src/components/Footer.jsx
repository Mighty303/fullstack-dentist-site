"use client";
import React from "react";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-12 mx-8 sm:mx-10 md:mx-14 h-[25%] z-50 flex-col mb-4">
      <div className="py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <Link href="/" onClick={() => window.scroll(0, 0)}>
          <img
            src="/assets/images/bws-logo.png"
            className="w-60 md:w-72 mb-4"
            alt="BWS logo"
          />
        </Link>
        <ul className="pl-4 flex flex-col md:flex-row gap-4 md:gap-8 whitespace-nowrap text-md">
          <li className="md:hidden">
            <ContactModal location={"Footer"} />
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-[#0184C9] duration-500"
              onClick={() => window.scroll(0, 0)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/our-team"
              className="hover:text-[#0184C9] duration-500"
              onClick={() => window.scroll(0, 0)}
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-[#0184C9] duration-500"
              onClick={() => window.scroll(0, 0)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-[#0184C9] duration-500"
              onClick={() => window.scroll(0, 0)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/before-first-visit"
              className="hover:text-[#0184C9] duration-500"
              onClick={() => window.scroll(0, 0)}
            >
              Before First Visit
            </Link>
          </li>
          {/* Remove for soft launch */}
          <li>
            <Link
              href="/blog"
              className="hover:text-[#0184C9] duration-500"
              onClick={() => window.scroll(0, 0)}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="pb-8 flex flex-col items-start justify-center pl-4 md:pl-0 gap-2 md:gap-0 py-0 pt-4 md:pt-0">
        <p>Broadway Smiles</p>
        <p>2732 W Broadway, Suite 202, Vancouver, BC, Canada, V6k 2G4</p>
        <p>Phone: (604)-736-7377 </p>
      </div>
      <hr className="border-black w-full py-4 md:py-2" />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:justify-between">
        <span className="flex flex-col justify-center items-start gap-2 md:gap-0 py-2">
          <p>Copyright &copy; 2024 All Rights Reserved. </p>
          <p>
            Designed and developed by{" "}
            <a
              href="https://avenatech.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              avenatech.ca
            </a>
          </p>
        </span>
        <div className="flex gap-4 pb-2 items-center">
          <a
            href="https://www.tiktok.com/@broadwaysmiles"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              className="w-8"
              src="/assets/images/icons/tik-tok.png"
              alt="instagram icon"
            />
          </a>
          <a
            href="https://www.youtube.com/@broadwaysmilesYT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              className="w-8"
              src="/assets/images/icons/youtube.png"
              alt="instagram icon"
            />
          </a>
          <a
            href="https://www.instagram.com/broadwaysmiles/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              className="w-8"
              src="/assets/images/icons/insta.png"
              alt="instagram icon"
            />
          </a>
          <a
            href="https://www.facebook.com/broadwayssmiles/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              className="w-8"
              src="/assets/images/icons/face.png"
              alt="Facebook icon"
            />
          </a>
          <a
            href="https://maps.app.goo.gl/odY85EAaz46MsmD37"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              className="w-8"
              src="/assets/images/icons/business.png"
              alt="Google icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
