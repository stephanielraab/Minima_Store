/** @type {import('next').NextConfig} */

const isGithubPages = process.env.DEPLOY_TARGET === "github";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: isGithubPages ? "/Minima_Store" : "",
  assetPrefix: isGithubPages ? "/Minima_Store/" : "",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;