const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = merge(base, {
    watch: true,
    entry: {
        app: './client/src/entry.js',
        vendor: './client/src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, './public'),
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