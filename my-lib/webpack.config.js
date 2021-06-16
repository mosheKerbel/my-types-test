const path = require("path");

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'libpack.js',
    library: 'libpack',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /.png$/,
        use: 'base64-image-loader'
      },
      {
        test: /.css$/,
        use: 'css-content-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
