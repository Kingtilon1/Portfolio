/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Only run ESLint on specific directories during production builds (optional)
      dirs: ['pages', 'components', 'lib', 'src'],
      // Ignore ESLint errors during production builds
      ignoreDuringBuilds: true,
    }
  };
  
  export default nextConfig;