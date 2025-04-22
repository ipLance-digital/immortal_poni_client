import type { NextConfig } from 'next';

const API_URL = process.env.NEXT_APP_PUBLIC_API ?? 'http://ipWeb:8000';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: `/api/v1/:path*`,
        destination: `${API_URL}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
