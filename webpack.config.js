/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* global __dirname */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.production === 'true' ? 'production' : 'development',
    entry: {
      game: {
        import: path.resolve(__dirname, 'src', 'index.ts'),
        dependOn: 'phaser',
      },
      // serviceWorker: path.resolve(__dirname, 'src', 'serviceWorker.ts'),
      phaser: 'phaser',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.EnvironmentPlugin({
        PHASER_DEBUG: env['phaser-debug'] === 'true',
      }),
      new CopyPlugin({
        patterns: [
          {
            // Style
            from: path.resolve(__dirname, 'public', 'style.css'),
            to: path.resolve(__dirname, 'build'),
          },
          {
            // Images
            from: path.resolve(__dirname, 'public', 'images'),
            to: path.resolve(__dirname, 'build', 'images'),
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    devtool: 'inline-source-map',
    devServer: {
      open: true,
      port: 3000,
      proxy: {
        '/api': 'http://localhost:3001',
      },
    },
  };
};
