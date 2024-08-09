module.exports = {
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "asset/[name].[hash].[ext]",
        },
      },
    ],
  },
};
