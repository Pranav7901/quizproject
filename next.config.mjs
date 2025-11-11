/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // ✅ Ensures Next.js uses the correct router system and works well on Vercel
  output: "standalone",

  // ✅ Enables app directory routing (for Next.js 13+ / 15)
  experimental: {
    appDir: true,
  },

  // ✅ Optional: ensures fallback to index for client-side navigation
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/",
      },
    ]
  },
}

export default nextConfig