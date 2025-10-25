/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ replaces "next export"
  basePath: '/egyheppem-portfolio', // ✅ match your GitHub repo name
  assetPrefix: '/egyheppem-portfolio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

