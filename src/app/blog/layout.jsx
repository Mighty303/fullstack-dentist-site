import React from "react";
import Script from "next/script";

export const metadata = {
  title: "Dental Care Blogs & News in Vancouver | Broadway Smile",
  description:
    "Get insights on dental care, oral hygiene tips, and the latest in dental treatments from the Broadway Smiles blog. Stay informed for a healthier smile.",
  metadataBase: new URL("https://broadwaysmiles.ca"),
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Dental Care Blogs & News in Vancouver | Broadway Smile",
    description:
      "Get insights on dental care, oral hygiene tips, and the latest in dental treatments from the Broadway Smiles blog. Stay informed for a healthier smile.",
    url: "/blog",
    type: "website",
    locale: "en_ca",
    siteName: "Broadway Smiles",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
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
