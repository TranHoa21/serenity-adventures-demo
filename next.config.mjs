/** @type {import('next').NextConfig} */


const nextConfig = {
    experimental: {
        reactRoot: true,
    },
    async rewrites() {
        return [
            {
                source: '/tour/link',
                destination: '/tour/id',
            },
        ];
    },
};

export default nextConfig;
