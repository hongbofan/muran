"use strict"
const webpack = require('webpack')
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    publicPath: './',
    devServer: {
        port: 8080,
        open: true
    },
    productionSourceMap: false,
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery'
            })
        ]
    },
    chainWebpack: config => {
        config.entry.app = ["babel-polyfill", resolve('src/main.js')],
            config.resolve.alias
                .set('@', resolve('src'))
                .set('./@assets', resolve('src/assets'))
                .set('@components', resolve('src/components'))
                .set('@pages',resolve('src/pages'))

    },
}
