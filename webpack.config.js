const path = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([ { from: 'src/images', to: 'images' } ])
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url?limit=50000',
      },
    ],
  }
}