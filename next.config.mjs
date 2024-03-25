/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
        serverComponentsExternalPackages: ['node-appwrite'],
      },
      reactStrictMode: true,
};

export default nextConfig;
