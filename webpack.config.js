const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : './src/test/replaceData2/render-Carousel.js',
    output : {
        filename : "index.js",
        path : path.resolve(__dirname, 'build')
    },
    mode: 'production',
    watch: true,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title : "Carousel-JS-CSS",
        filename : "index.html"
    })],
    devtool : "inline-source-map",
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
              loader: 'uglify-template-string-loader'
            }]
          }
        ]
      }
}