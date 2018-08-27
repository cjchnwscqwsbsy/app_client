const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app:'./src/index.js',
    print:'./src/print.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title:'Output Management'})
  ],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js'
  },
  module:{
      rules: [{
          test:/\.css$/,
          use:['style-loader','css-loader']
      },{
          test:/\.(png|svg|jpg|gif|jpeg)/,
          use: ['file-loader']
      }]
  }
};
