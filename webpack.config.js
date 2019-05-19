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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
         use: [
           {
             loader: 'file-loader',
             options: {
               outputPath: 'appImages'
             }
           }
         ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // modules: [PATHS.app, PATHS.module
    alias: {
      components: path.resolve(__dirname,  'src/components/'),
      pages: path.resolve(__dirname,  'src/pages/'),
    }
  },

  plugins: [htmlPlugin],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true // this prevents the default browser full page refresh on form submission and link change
  }
};
