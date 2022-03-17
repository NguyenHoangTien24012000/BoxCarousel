const path = require('path');
// const loader = require("file-loader")
module.exports = {
    entry : './src/js/replaceData.js',
    output : {
        filename : "index.js",
        path : path.resolve(__dirname, 'build')
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
}