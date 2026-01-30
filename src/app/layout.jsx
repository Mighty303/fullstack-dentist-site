import React from "react";
import "./globals.css";
import "@egjs/react-view360/css/view360.min.css";
import Script from "next/script";
// import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "Broadway Smiles Dental: Dentist Clinic Kitsilano Vancouver",
  description:
    "Broadway Smiles is the leading dental clinic in Kitsilano, Vancouver. Expert dentists offer various services to keep your smile bright and healthy. Visit Today!",
  keywords: "dentist, Kitsilano, Vancouver, dental care, family dentist",
  robots: {
    // Search engine instructions
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://broadwaysmiles.ca"),
  alternates: {
    canonical: "/",
  },
  verification: {
    // google search console
    google: "ij65qxOiyBaUFEiL4e25Fg9Vl129AW2S7Xgjg4h32Iw",
  },
  openGraph: {
    // open graph tags
    title: "Broadway Smiles Dental: Dentist Clinic Kitsilano Vancouver",
    description:
      "Broadway Smiles is the leading dental clinic in Kitsilano, Vancouver. Expert dentists offer various services to keep your smile bright and healthy. Visit Today!",
    url: "https://broadwaysmiles.ca",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
    images: [
      // it would be better to use https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
      {
        url: "https://broadwaysmiles.ca/wp-content/uploads/2022/05/IMG_4819-scaled.jpeg",
        width: 2560,
        height: 1707,
        alt: "A group photo of Broadway Smiles staff",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KVBGN6G8" />
      <body>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
          data-use-service-core
        ></Script>
        {children}
        {/* <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                    <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
                    <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script> */}
      </body>
    </html>
  );
}
