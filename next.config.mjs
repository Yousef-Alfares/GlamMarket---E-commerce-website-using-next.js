/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "dummyjson.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

export default nextConfig;
