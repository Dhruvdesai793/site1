/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This tells Next.js to export your project as static HTML/CSS/JS
  basePath: '/site1', // This is important for GitHub Pages when your site is in a subfolder
  images: {
    unoptimized: true, // Recommended for static exports if you use Next.js Image component
  },
};

export default nextConfig;
