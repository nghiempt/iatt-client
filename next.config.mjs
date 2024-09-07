/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                port: '',
                pathname: '/128/**',
            },
            {
                protocol: 'https',
                hostname: 'phunuvietnam.mediacdn.vn',
                port: '',
                pathname: '/thumb_w/**',
            },
            {
                protocol: 'https',
                hostname: 'www.furniro.shop',
                port: '',
                pathname: '/_next/**',
            },
        ],
    },
};

export default nextConfig;
