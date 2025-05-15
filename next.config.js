/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable TypeScript type checking during build
    typescript: {
      ignoreBuildErrors: true,
    },
    // Disable ESLint checking during build
    eslint: {
      ignoreDuringBuilds: true,
    },
    // Add this to handle the baseUrl issue
    experimental: {
      appDir: true,
    }
  }
  
  module.exports = nextConfig