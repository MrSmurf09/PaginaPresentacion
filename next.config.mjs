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
  // Eliminamos exportPathMap ya que no es compatible con el directorio app
};

export default nextConfig;
