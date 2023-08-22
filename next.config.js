/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = { 
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '3dgunbuilder.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

