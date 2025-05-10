const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        scriptType: 'text/javascript',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    devServer: {
        static: './dist',
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'Tic-Tac-Toe',
            template: './src/assets/template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],

    },
};