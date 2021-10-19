const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports={
  entry:'./src/client/app.js',
  mode:'development',
  devtool:'source-map',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js',
    assetModuleFilename: 'images/[name].[ext]',
    libraryTarget: 'var',
    library: 'Client'

  },
  plugins:[new HtmlWebpackPlugin({
    template:'./src/client/views/index.html',
    filename: 'index.html'
  }),
  new CleanWebpackPlugin(),
],
module: {
  rules: [
    {
      test: /\.html$/i,
      loader: "html-loader",
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    },
    {
      test: /\.scss$/,
      use:["style-loader","css-loader","sass-loader"]
    }
  ]
}
}