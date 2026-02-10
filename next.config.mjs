/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // dodaje końcowy slash do wszystkich ścieżek
  images: {
    unoptimized: true,
  },
  assetPrefix: "/", // upewnia się, że wszystkie _next/static są od root
};

export default nextConfig;
