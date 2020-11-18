const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    entry: './src/client/client.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '',
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__ : "true"
        })
    ]
}

module.exports = merge(baseConfig, config);