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
  },
  async headers() {
    return [
      {
        source: "/blog/:slug/opengraph-image",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
      },
      {
        source: "/rss.xml",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }]
      }
    ];
  }
};

export default nextConfig;
