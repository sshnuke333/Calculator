const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Calculator',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheCompression: false,
                    cacheDirectory: true,
                },
            },
        ],
    },
    resolve: {
        alias: {
            '@mui/styled-engine': '@mui/styled-engine-sc',
        },
    },
    optimization: {
        splitChunks: {
            minSize: 10000,
            maxSize: 250000,
        },
    },
};
