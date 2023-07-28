const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        throwIfNamespace: false
      },
      
      // Add other rules for handling different file types and loaders as needed.
    ],
  },
};
