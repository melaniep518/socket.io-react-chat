var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
  entry: "./app/js/entry.jsx",
  output: {
    path: "./app/js/",
    filename: "bundle.js",
  },
  //what is bundle.js doing?
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        //what problem is this solving?
        //what is regex?
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
          //transpiling & compilation
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!'
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        exclude: /\/favicon.ico$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },

    ]
  },
   postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
    ];
  },
  devtool: 'eval-source-map',
  resolve: {
      root: path.resolve(__dirname),
      alias: {
        loginReducer: 'app/js/reducers/loginReducer'
      },
      extensions: ["", ".js", ".jsx" ]
  }
};