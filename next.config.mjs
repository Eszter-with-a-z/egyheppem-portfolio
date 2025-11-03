/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Export static HTML for GitHub Pages
  output: 'export',

  // Use repo name as base path on production (GitHub Pages)
  basePath: isProd ? '/egyheppem-portfolio' : '',

  // Prefix all static asset URLs with the same path
  assetPrefix: isProd ? '/egyheppem-portfolio/public' : '',

  // Avoid image optimization (since we’re fully static)
  images: {
    unoptimized: true,
  },

  // Optional: keep trailing slashes for cleaner static URLs
  trailingSlash: true,

  // Ignore type errors during build (optional)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
