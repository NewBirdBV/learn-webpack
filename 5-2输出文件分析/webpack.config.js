const path = require('path');
const webpack = require('webpack');

const MyPlugins = require('./plugins/myPlugins.js');
const TestPlugins = require('./plugins/testPlugin');

module.exports = {
  entry: './main',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: ['./loaders/testLoader.js', './loaders/myLoader.js']
      }
    ]
  },
  plugins: [
      new MyPlugins((stat) => {
        for (let i in stat.compilation.assets ){
          debugger;
          console.log(stat.compilation.assets[i].source())
        }
      }, (err) => {
        console.log('fail', err)
      }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"',
    })
  ],
  resolve: {
    modules: ['node_modules']
  }
};
