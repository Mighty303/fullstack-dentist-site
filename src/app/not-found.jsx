import React from "react";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-blue-500 pb-12">
          404 Page Not Found
        </h1>
        <p className="text-2xl">
          Sadly, the page you're looking for has been moved or decomissioned.
        </p>
        <p className="text-2xl">
          Return to{" "}
          <Link href="/" className="font-bold">
            Home
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
