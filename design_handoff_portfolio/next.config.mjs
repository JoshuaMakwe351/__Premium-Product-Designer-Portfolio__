/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local assets live in /public/assets. Add remote patterns here if you
    // later serve images from a CMS/CDN.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
