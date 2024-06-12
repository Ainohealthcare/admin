/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pelvicbio-images.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
