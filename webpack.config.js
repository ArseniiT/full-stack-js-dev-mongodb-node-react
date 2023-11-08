const webpack = require('webpack');

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  // FIXME how to add HOST and PORT in process.env, it is always empty
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    // new webpack.EnvironmentPlugin({
    //   'process.env.HOST': '0.0.0.0',
    //   'process.env.PORT': '8080'
    // })
  ]
};
