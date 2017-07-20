var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');
var postcssOpts = {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
        autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
        }),
        pxtorem({ rootValue: 100, propWhiteList: [] })
    ],
};
var config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules'), path.join(__dirname, 'app')],
        extensions: ['.web.js', '.jsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                include: [path.resolve(__dirname, "app")],
                exclude: [path.resolve(__dirname, "node_modules")],
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.(svg)$/i,
                loader: 'svg-sprite-loader',
                include: [
                    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
                    path.resolve(__dirname, 'app/svgs'),  // 自己私人的 svg 存放目录
                ]
            },
            // 注意：如下不使用 ExtractTextPlugin 的写法，不能单独 build 出 css 文件
            // { test: /\.less$/i, loaders: ['style-loader', 'css-loader', 'less-loader'] },
            // { test: /\.css$/i, loaders: ['style-loader', 'css-loader'] },
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: postcssOpts
                        },
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', { loader: 'postcss-loader', options: postcssOpts }
                    ]
                })
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
        new ExtractTextPlugin({ filename: '[name].css', allChunks: true })
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