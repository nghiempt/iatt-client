/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn-icons-png.flaticon.com',
            port: '',
            pathname: '/128/**',
        },
        {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            port: '',
            pathname: '/**',
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
        {
            protocol: 'https',
            hostname: 'abfurnishings.in',
            port: '',
            pathname: '/wp-content/**',
        },
        {
            protocol: 'https',
            hostname: 'planguages.com',
            port: '',
            pathname: '/uploads/**',
        },
        ],
    },
};

export default nextConfig;