/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        REQUEST_URL : "localhost:4000",
    },
    images: {
        domains: ['localhost'],
      },
};

export default nextConfig;
