export default function manifest() {
  return {
    name: "Broadway Smiles",
    short_name: "BWS",
    description:
      "Broadway Smiles is the leading dental clinic in Kitsilano, Vancouver. Expert dentists offer various services to keep your smile bright and healthy.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
