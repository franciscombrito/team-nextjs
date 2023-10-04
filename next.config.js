/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/team",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["team-api-508w.onrender.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
