/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.media-amazon.com", "res.cloudinary.com", "lh3.googleusercontent.com"],
  },
  webpack: (config) => {
    config.externals = [...config.externals, "bcrypt"]
    return config
  },
}

export default nextConfig
