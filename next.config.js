/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  //cause webpack does not know about how to bundle the graphql , we use another loader for it
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.graphql?$/,
      loader: "webpack-graphql-loader",
    });

    return config;
  },
};
