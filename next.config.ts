import type { NextConfig } from 'next';

const API_URL = process.env.NEXT_APP_PUBLIC_API ?? 'http://localhost:8000';

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
      {
        source: `/ws/:path*`,
        destination: `${API_URL}/ws/:path*`,
      },
    ];
  },
  images: {
    domains: ['plus.unsplash.com'],
  },
};

export default nextConfig;
