const path = require('path');
module.exports = {
    entry: './sources/app.jsx',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    devtool: 'eval-source-map',
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.m?jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.less$/,
            use: [
                "style-loader",
                {
                  loader:'css-loader',
                  options: {
                    url: false
                  }
                },
                'less-loader'
              ]
          },
        ]
    }
};