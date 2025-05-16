/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/control-bovino' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/control-bovino/' : '',
  // Excluir rutas API de la exportación estática
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    };
  },
};

export default nextConfig;
