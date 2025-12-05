const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/flowforge',
        destination: 'https://innovaasflowforge.vercel.app',
      },
      {
        source: '/flowforge/:path*',
        destination: 'https://innovaasflowforge.vercel.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 