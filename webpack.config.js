const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');



module.exports = {
  mode: 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

  entry: './src/app.js',

  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'js',  // Or 'ts' if you don't need tsx
          target: 'es2017'
        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      // minify: true,
    }),
    // process
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};
