const path = require('path')
const baseConfig = require('./webpack.base.config')

function resolve(p) {
  return path.resolve(__dirname, '../', p)
}

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-cli-template',
        templateParameters: function () { /* omitted long function */ },
        template: resolve('public/index.html')
      }
    ),
  ]

})

