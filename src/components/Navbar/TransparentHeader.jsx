"use client";
import React from "react";
import { useState, useEffect } from "react";
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

// Header used on the home page,
const Header = () => {
  const scrollPosition = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Preload images
    const images = [
      "/assets/images/bws-logo.png",
      "/assets/images/bws-icon.png",
      "/assets/images/icons/close-icon-white.png",
      "/assets/images/icons/close-icon.png",
      "/assets/images/icons/menu.png",
      "/assets/images/icons/menu-white.png",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  function toggleMenu(e) {
    e.preventDefault();
    setMenuOpen((prevState) => !prevState); // toggle menuOpen state
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav
      className={classNames(
        scrollPosition > 0
          ? "shadow-md bg-white text-black"
          : "shadow-none bg-none text-white",
        "transition-colors fixed w-full z-50"
      )}
    >
      <div className="p-5 px-2 sm:px-6 flex items-center justify-between w-full">
        <Link
            href="/"
            className="flex-shrink-0"
            onClick={() => window.scroll(0, 0)}
          >
            <img
              src={
                scrollPosition > 0
                  ? "/assets/images/bws-logo.png"
                  : "/assets/images/bws-icon.png"
              }
              className={scrollPosition > 0 ? "w-60 md:w-72" : "h-16 pr-[224px]"}
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
          <ContactModal />
        </div>

        <Sheet>
          {/* Menu Drawer Control */}
          <SheetTrigger asChild>
            <span className="text-3xl cursor-pointer mx-2 xl:hidden block">
              {menuOpen ? (
                scrollPosition == 0 ? (
                  <img
                    src="/assets/images/icons/close-icon-white.png"
                    alt="Close Icon"
                    className="w-7"
                  />
                ) : (
                  <img
                    src="/assets/images/icons/close-icon.png"
                    alt="Close Icon"
                    className="w-7"
                  />
                )
              ) : scrollPosition > 10 ? (
                <img
                  src="/assets/images/icons/menu.png"
                  className="w-7"
                  alt="Menu Icon"
                />
              ) : (
                <img
                  src="/assets/images/icons/menu-white.png"
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
              <ContactModal />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;
