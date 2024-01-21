// next.config.mjs

const nextConfig = {
    webpack: (config, { isServer }) => {
      // Ajoutez le loader pour les fichiers vidéo
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  