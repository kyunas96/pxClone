const webpack = require("webpack");
const path = require("path");

const devBuild = process.env.NODE_ENV !== "production";
const nodeEnv = devBuild ? "development" : "production";

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", "*"],
    alias: {
      assets: path.resolve("./app/assets"), // Makes it easier to reference our assets in jsx files
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name][md5:hash].[ext]", // Name of bundled asset
              outputPath: "webpack-assets/", // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
              publicPath: "/assets/webpack-assets/", // Endpoint asset can be found at on Rails server
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
};
