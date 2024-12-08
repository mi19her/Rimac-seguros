import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
    basePath: isProd?'':'', 
    assetPrefix: isProd?'': '',
    output: 'standalone',
    trailingSlash: true,
};

export default nextConfig;
