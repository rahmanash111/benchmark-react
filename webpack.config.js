const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        format: { comments: false },
        compress: { drop_console: true },
        mangle: true, // Obfuscate variable and function names
      },
    })],
  },
};
