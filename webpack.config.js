const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: {
    "madewith-vigotech": "./src/madewith-vigotech.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // js: {
        //   test: /\.js$/,
        //   name: "commons",
        //   chunks: "all",
        //   minChunks: 7,
        // },
        css: {
          test: /\.(css|sass|scss)$/,
          name: "commons",
          chunks: "all",
          minChunks: 2,
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
             name: '[name].[ext]',
          //   outputPath: 'fonts/'
          }
        }]
      }

    ]
  }
}