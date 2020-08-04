const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devOptions = {
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    compress: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, './src')
  }
}

const prodOptions = {}

const options = process.env.NODE_ENV === 'production' ?
  prodOptions : devOptions;

module.exports = {
  ...options,
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