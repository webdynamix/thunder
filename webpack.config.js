const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const CURRENT_WORKING_DIR = process.cwd();

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


module.exports = {
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // modules: [PATHS.app, PATHS.module
    alias: {
      components: path.resolve(__dirname,  'src/components/'),
    }
  },
  plugins: [htmlPlugin]
};
