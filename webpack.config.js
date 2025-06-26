const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // change to production for deploy build
  entry: "./src/App.jsx",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "main.js",
    publicPath: "./", // important for GitHub Pages relative paths
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // your source HTML
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    compress: true,
    port: 3000,
  },
};
