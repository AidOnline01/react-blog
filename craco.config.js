const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: '@import "./src/scss/vars.scss"; @import "./src/scss/elements.scss";'
      }
    }
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
          webpackConfig.resolve.alias['@'] = path.resolve(__dirname, 'src/');
          webpackConfig.resolve.extensions.push('.scss');
      
          return webpackConfig;
        }
      }
    }
  ]
}