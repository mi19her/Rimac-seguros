import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
    basePath: isProd?'/Rimac-seguros':'', 
    assetPrefix: isProd?'/Rimac-seguros/': '',
    output: 'export',
};

export default nextConfig;
