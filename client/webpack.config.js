const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    target: 'node',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        {
                            plugins: [
                                '@babel/plugin-proposal-class-properties'
                            ]
                        }
                    ]
                }
            },
            {
                test: /.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name]-[hash].[ext]'
                    }
                }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: './index.html',
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.DefinePlugin({
            'process.env.BROWSER': false
        })
    ],
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
    devServer: {
        port: process.env.PORT || 3000, // port webpack-dev-server listens to, defaults to 8080
        overlay: { // Shows a full-screen overlay in the browser when there are compiler errors or warnings
            warnings: true, // default false
            errors: true, //default false
        },
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true
    }
};