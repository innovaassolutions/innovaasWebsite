const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/flowforge',
        destination: 'https://innovaasflowforge.vercel.app/flowforge',
      },
      {
        source: '/flowforge/:path*',
        destination: 'https://innovaasflowforge.vercel.app/flowforge/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 