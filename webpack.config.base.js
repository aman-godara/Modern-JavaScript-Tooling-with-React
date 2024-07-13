const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "src"),
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: ["last 2 versions", "not dead", "not < 2%"],
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-hot-loader/babel"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
