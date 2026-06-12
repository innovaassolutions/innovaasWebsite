const nextConfig = {
  async redirects() {
    return [
      {
        source: '/partners/tulip',
        destination: '/distribution/tulip',
        permanent: true,
      },
      {
        source: '/partners',
        destination: '/distribution',
        permanent: true,
      },
      {
        // PDUMind partnership ended — page retired
        source: '/solutions/data-center-power',
        destination: '/solutions',
        permanent: true,
      },
    ];
  },
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