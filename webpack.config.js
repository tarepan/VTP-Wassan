const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HtmlWebpackInjector = require("html-webpack-injector");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.ts",
    /*x_head: "./src/headInserted.ts"*/
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.template.html",
      chunks: [
        "main",
        // "x_head"
      ],
    }),
    // new HtmlWebpackInjector()
    new CopyPlugin({
      patterns: [
        { from: "src/manifest.webmanifest", to: "manifest.webmanifest" },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8000,
  },
};
