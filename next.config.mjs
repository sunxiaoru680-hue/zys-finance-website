/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000
  },
  async redirects() {
    return [
      {
        source: "/services/accounting-bookkeeping",
        destination: "/services/accounting-services",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
