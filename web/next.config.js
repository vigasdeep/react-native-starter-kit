const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: (config) => {
    const updatedConfig = config;

    updatedConfig.node = {
      // Fixes npm packages that depend on `fs` module
      fs: 'empty',
    };

    return updatedConfig;
  },
});
