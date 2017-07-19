var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                include: [path.resolve(__dirname, "app")],
                exclude: [path.resolve(__dirname, "node_modules")],
                loader: 'babel-loader'
            },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config;