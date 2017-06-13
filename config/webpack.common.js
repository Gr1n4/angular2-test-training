const webpack = require('webpack')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , ExtractTextPlugin = require('extract-text-webpack-plugin')
    , path = require('path')
    , AotPlugin = require('@ngtools/webpack').AotPlugin
    , helpers = require('./helpers')

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        // loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        loaders: ['@ngtools/webpack']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.sass$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap!resolve-url-loader!sass-loader?sourceMap'})
      },
      {
        test: /\.sass$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader!sass-loader?sourceMap'
      },
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      ///angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      //helpers.root('./src'), // location of your src
      //{} // a map of your routes
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new AotPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: helpers.root('src/app/app.module.ts#AppModule')
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    })
  ]
};
