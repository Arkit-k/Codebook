/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY, // Add this line
  },
};

export default nextConfig;
