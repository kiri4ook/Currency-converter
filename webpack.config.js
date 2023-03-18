const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
   mode: "development",
   entry: {
      filename: path.resolve(__dirname, "src/index.js")
   },
   output: {
      path:  path.resolve(__dirname, "dist"),
      filename: "main.js"
   },

   plugins: [
      new HtmlWebpackPlugin({
         title: 'Currency Converter',
         template: 'public/index.html'
      }),
      new CopyWebpackPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'public/images'),
               to: path.resolve(__dirname, 'dist', 'images')
            }
         ]
      }),
      new MiniCssExtractPlugin({
         filename: 'style.css',
      })
   ],

   devtool: "source-map",

   module: {
      rules: [{
         test: /\.js$/,
         loader: "babel-loader"
      }, {
         test: /\.css$/,
         use: ["style-loader", "css-loader"],
      },
      {
         test: /\.(gif|png|jpe?g|svg)$/i,
         use: [{
            loader:  'file-loader',
            options: {
               bypassOnDebug: true, 
               disable: true,
            },
         },
         {
            loader:  'image-webpack-loader',
            options: {
               bypassOnDebug: true, 
               disable: true,
            },
         },],
      }],
   },

   watch: true,

   devServer: {
      port: 9000,
      compress: true,
      hot: true,
      static: {
         directory: path.join(__dirname, "dist")
      }
   }
};