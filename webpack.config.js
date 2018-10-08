var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var packageJson = require('./package.json');
var path = require('path');

module.exports = {

    entry: {
        vendor: Object.keys(packageJson.dependencies),
        app: "./app/index.js"
    },
    output: {
        path: path.join(__dirname, "/dist/"),
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname,"/dist/"),
        port:9000
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './app/index.html',
            path: path.join(__dirname,"/dist/"),
            filename: 'index.html'
        })
    ]
}