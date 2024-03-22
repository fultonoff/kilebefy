/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['node-appwrite'],
      },
      reactStrictMode: true,
};

export default nextConfig;
