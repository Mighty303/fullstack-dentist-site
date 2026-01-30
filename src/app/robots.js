export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/assets/",
    },
    sitemap: "https://broadwaysmiles.ca/sitemap.xml",
  };
}
