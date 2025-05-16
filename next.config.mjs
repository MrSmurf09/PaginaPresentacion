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
  // Asegúrate de que el basePath coincida exactamente con el nombre del repositorio
  basePath: process.env.NODE_ENV === 'production' ? '/PaginaPresentacion' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PaginaPresentacion/' : '',
  // Eliminamos exportPathMap ya que no es compatible con el directorio app
};

export default nextConfig;
