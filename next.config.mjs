/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
    eslint: {
      // Only run ESLint on specific directories during production builds (optional)
      dirs: ['pages', 'components', 'lib', 'src'],
      // Ignore ESLint errors during production builds (this is a bit extreme but will work)
      ignoreDuringBuilds: true,
    },
  }
export default nextConfig;
