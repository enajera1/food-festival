const path = require('path'); 
const  webpack  = require('webpack');


module.exports = {
  entry: './assets/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //creating a directory named 'dist'
    filename: 'main.bundle.js' //creating a file name with compressed js
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ],
  mode: 'development'
}; 
