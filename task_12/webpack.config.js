const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
});

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        // babel-loader with 'env' preset
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: { presets: ['env'] } },
      },
      {
        // sass module with source maps
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader', // translates CSS into CommonJS
              options: { sourceMap: true },
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
              options: { sourceMap: true },
            },
          ],
          fallback: 'style-loader', // creates style nodes from JS strings
        }),
      },
      {
        // file-loader(for images)
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]', outputPath: './img/' },
          },
        ],
      },
      {
        // file-loader(for fonts)
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        // svg-loader
        test: /\.svg$/,
        use: ['svg-loader'],
      },
    ],
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};

module.exports = config;
