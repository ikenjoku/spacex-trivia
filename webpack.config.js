const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, './src'),
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  entry: {
    jsx: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: ["babel-loader","eslint-loader"]
      },
      {
        test: /\.html$/,
        loader: ["html-loader"]
      },
      {
        test: /\.css$/,
        loader: ["css-loader"]
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "node_modules")
    ],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })
  ]
};