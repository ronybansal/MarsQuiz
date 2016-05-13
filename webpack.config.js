var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main.jsx',
    },
    output: {
        filename: '[name].js',
        publicPath: '/build/'
    },
    devtool: '#source-map',
    devServer: {
      watch:true,
      historyApiFallback: true,
      inline: true,
      host: '0.0.0.0',
      port: '3000',
      watchOptions: {
            aggregateTimeout: 300,
            poll: 2000
      }
    },
    module: {
         loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}
