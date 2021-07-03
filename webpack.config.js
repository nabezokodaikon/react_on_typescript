module.exports = {
  mode: "development",
  entry: "./public/src/main.tsx",
  output: {
    path: `${__dirname}/public/dist`,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", "tsx", ".js", ".jsx"]
  },
  target: ["web", "es6"],
}
