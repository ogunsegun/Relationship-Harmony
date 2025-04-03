import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // Keep only supported experimental features
  },
  images: {
    domains: ["lh3.googleusercontent.com"], // Allow Google profile images
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(process.cwd()),
    };
    return config;
  },
};

export default nextConfig;






// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//     serverComponentsExternalPackages: ["mongoose"],
//   },
//   images: {
//     domains: ['lh3.googleusercontent.com'],
//   },
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@': path.resolve(process.cwd()), // Set '@' to the project root
  //   };
  //   return config
  // }
// }

// module.exports = nextConfig








// import path from 'path';

// const nextConfig = {
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@': path.resolve(process.cwd()), // Set '@' to the project root
  //   };
//     return config;
//   },
// };

// export default nextConfig;












// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental:{
//         appDir: true,
//         serverComponentsExternalPackages: ['mongoose'],
//     },
//     images: {
//         domains: ['lhs3.googleusercontent.com'],
//     },
//     webpack(config) {
//         config.experiments ={
//             ...config.experiments,
//             topLevelAwait: true,
//         }
//         return config
//     }
// };

// export default nextConfig;
