var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    site: "./frontend/index.js"
  },
  resolve: {
    alias: {
      components: __dirname + "/frontend/components"
    }
  },
  output: {
    path: __dirname + "/.tmp/dist",
    filename: "javascripts/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader"
          ],
          publicPath: __dirname + "/frontend/stylesheets/site.scss"
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("stylesheets/site.css")]
};
