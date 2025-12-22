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
      {
        source: '/nova',
        destination: 'https://nova-innovaas-solutions.vercel.app/nova',
      },
      {
        source: '/nova/:path*',
        destination: 'https://nova-innovaas-solutions.vercel.app/nova/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 