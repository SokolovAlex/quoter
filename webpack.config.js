const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const config = merge(base, {
    watch: true,
    devtool: isProd ? false : '#cheap-module-source-map',
    entry: {
        app: './client/src/entry.js',
        vendor: './client/src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new CopyWebpackPlugin([
            { from: 'client/index.html', to: 'index.html' },
        ])
    ]
})

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.ModuleConcatenationPlugin()
    )
}

module.exports = config