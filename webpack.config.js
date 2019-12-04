const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
   rules: [
      {
        test: /\.js|jsx$/,
        exclude: [
          /node_modules/,
          /tests/
        ],
        use: { loader: 'babel-loader' }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "index.[chunkhash].js"
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3030,
    open: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Welcome to chusquin.com',
      template: 'src/assets/index.html',
      meta: {
        "http-equiv":"cache-control",
        "content": "no-cache"
      }
    })
  ]
};
