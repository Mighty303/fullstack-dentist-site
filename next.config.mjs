/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: "standalone",
  serverRuntimeConfig: {
    port: 5000,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.broadwaysmiles.ca",
        pathname: "/files/v1/**",
      },
      {
        protocol: "https",
        hostname: "api-staging.broadwaysmiles.ca",
        pathname: "/files/v1/**",
      },
    ],
  },
};

export default nextConfig;
