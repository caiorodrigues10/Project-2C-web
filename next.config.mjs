/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "twoc.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
