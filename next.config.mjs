/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Ignore ESLint warnings and errors during builds
    },
    typescript: {
      ignoreBuildErrors: true, // Ignore TypeScript errors during builds
    },
  };
  
  export default nextConfig;
  
