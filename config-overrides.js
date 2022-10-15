/* eslint-disable no-param-reassign */
const webpack = require("./node_modules/webpack");

module.exports = function override(webpackConfig) {
  const fallback = webpackConfig.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
  });
  webpackConfig.resolve.fallback = fallback;
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  // webpackConfig.module.rules.push({
  //   test: /\.mjs$/,
  //   include: /node_modules/,
  //   type: "javascript/auto",
  // });

  return webpackConfig;
};
