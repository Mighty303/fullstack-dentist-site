"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import NavElement from "./NavElement";
import ServicesDropDown from "./ServicesDropDown";
import ServicesDropDownMobile from "./ServicesDropDownMobile";
import ContactModal from "../ContactModal";

import { useScrollPosition } from "@/hooks/useScrollPosition";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

// Plain white header
const Header = () => {
  const scrollPosition = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu(e) {
    e.preventDefault();
    setMenuOpen((prevState) => !prevState); // toggle menuOpen state
  }

  return (
    <nav
      className={
        "shadow-md transition-shadow bg-white fixed w-full z-40"
      }
    >
      <div className="h-12 bg-[#0184C9]">
        <text className="w-full h-full flex justify-center items-center text-white text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
          $750 Rebate Available for Invisalign - Check Eligibility - Limited Time Offer
        </text>
      </div>
      <div className="p-5 px-2 sm:px-6 flex items-center justify-between w-full">
        <Link
          href="/"
          className="flex-shrink-0"
          onClick={() => window.scroll(0, 0)}
        >
          <img
            src="/assets/images/bws-logo.png"
            className="w-60 md:w-72"
            width="288px"
            alt="BWS logo"
          />
        </Link>

        {/* Desktop Nav Bar Elements */}
        <ul
          className={
            "hidden md:hidden xl:flex xl:items-center xl:whitespace-nowrap"
          }
        >
          <NavElement link="/our-team" text="OUR TEAM" />
          <NavElement link="/invisalign" text="INVISALIGN" />
          <ServicesDropDown />
          <NavElement link="/contact" text="CONTACT" />
          <NavElement link="/before-first-visit" text="BEFORE FIRST VISIT" />
          <NavElement link="/blog" text="BLOG" />
        </ul>

        <div
          className={
            "hidden md:hidden xl:flex xl:items-center xl:whitespace-nowrap"
          }
        >
          <ContactModal location={"Desktop Navbar"} />
        </div>

        <Sheet modal={false}>
          {/* Menu Drawer Control */}
          <SheetTrigger asChild>
            <span className="text-3xl cursor-pointer mx-2 xl:hidden block">
              {menuOpen ? (
                <img
                  src="/assets/images/icons/close-icon.png"
                  alt="Close Icon"
                  className="w-7"
                />
              ) : (
                <img
                  src="/assets/images/icons/menu.png"
                  className="w-7"
                  alt="Menu Icon"
                />
              )}
            </span>
          </SheetTrigger>

          {/* Menu Drawer Contents */}
          <SheetContent
            className="flex flex-col gap-4"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <SheetHeader>
              <Link href="/">
                <img
                  src={"/assets/images/bws-logo.png"}
                  className="w-60 md:w-72"
                  alt="BWS logo"
                />
              </Link>
            </SheetHeader>
            <ul className="list-none flex flex-col gap-5 text-lg md:text-lg">
              <NavElement
                color={"text-black"}
                link="/our-team"
                text="Our Team"
              />
              <NavElement
                color={"text-black"}
                link="/invisalign"
                text="Invisalign"
              />
              <ServicesDropDownMobile />
              <NavElement color={"text-black"} link="/contact" text="Contact" />
              <NavElement
                color={"text-black"}
                link="/before-first-visit"
                text="Before First Visit"
              />
            </ul>
            <div className={"m-3"}>
              <ContactModal location={"Mobile Navbar"} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;
