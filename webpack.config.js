/**
 * Created by hckrmoon on 8/12/17.
 */

const webpack = require('webpack')
const isProd = process.env.NODE_ENV === "production"


const webpackConfig = {
  entry: './public/static/js/dev/main.js',
  output: {
    filename: './public/static/js/prod/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [

  ]
}

if (isProd) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    })
  )
} else {
}

module.exports = webpackConfig
