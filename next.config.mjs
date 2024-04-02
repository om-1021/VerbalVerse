/** @type {import('next').NextConfig} */
const nextConfig = {
  //* do this inorder to add images from external sources
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
