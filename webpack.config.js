const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config()

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'development',
    entry: ['whatwg-fetch', './index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpeg|jpg)$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL)
        })
    ]
}