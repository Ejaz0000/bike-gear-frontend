/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'bike-gear-backend.onrender.com',
                pathname: '**',
            }
        ]
    },
};

export default nextConfig;