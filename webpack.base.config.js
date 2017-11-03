const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    resolve: {
        modules: [
            'src',
            path.resolve(__dirname, "node_modules"),
            'node_modules'
        ],
        alias: {
            'public': path.resolve(__dirname, '../public')
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: process.env.NODE_ENV === 'production',
                preserveWhitespace: false,
                postcss: [
                    require('autoprefixer')({
                        browsers: ['last 3 versions']
                    })
                ]
            },
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    // performance: {
    //     maxEntrypointSize: 300000,
    //     hints: 'warning'
    // },
    plugins: isProd ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : [
        //new ExtractTextPlugin("[name].css")
        //new FriendlyErrorsPlugin()
    ]
}