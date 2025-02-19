import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // Render no soporta optimización automática de imágenes
  },
};

export default nextConfig;
