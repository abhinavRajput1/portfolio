/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for Vercel deployment
  // Vercel handles static generation automatically
  images: {
    unoptimized: true
  },
  // Ensure proper routing for Vercel
  trailingSlash: false,
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here if needed
  }
}

module.exports = nextConfig
