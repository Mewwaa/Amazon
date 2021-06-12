var config = {
    entry: './main.js',
  
    output: {
      path: './',
      filename: 'main.js'
    },
    devServer: {
      inline: true,
      port: 7777
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  }
  module.exports = config;