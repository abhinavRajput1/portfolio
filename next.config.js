/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js configuration for Vercel
  images: {
    unoptimized: true
  },
  // Ensure proper routing
  trailingSlash: false,
  // Enable static optimization
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig
