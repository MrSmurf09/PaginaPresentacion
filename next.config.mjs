/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Genera archivos estáticos
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // Necesario para exportación estática
  },
  basePath: process.env.NODE_ENV === 'production' ? '/control-bovino' : '',  // Ajusta esto al nombre de tu repositorio
  assetPrefix: process.env.NODE_ENV === 'production' ? '/control-bovino/' : '',  // Ajusta esto al nombre de tu repositorio
};

export default nextConfig;
