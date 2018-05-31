/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../dos-html'),
        port: 7001,
        hot: true,
        // open: false,
        inline: true,
        compress: true,
        historyApiFallback: true,
        // proxy: {
        //     '/rest': {
        //         target: 'http://10.0.101.162:9596', //测试环境
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/rest': '' //本地没有rest
        //         },
        //     }
        // }
    },
    entry: {
        // index: [path.resolve(__dirname, '../dos/main.js')],
        index: ['./dos/main.js'],
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../dos-html'),
        filename: '[name].[hash].js',
        // publicPath: '/',
        chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader'
                    },
                }
            },
            {
                loader: 'kui-loader',
                options: { prefix: false }
            }
            ]
        },]
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        new VueLoaderPlugin(), //for vue-loader 15
        // 热键替换，配合devServer => hot:true
        new webpack.HotModuleReplacementPlugin(),
        // 位于开发环境下
        // 自动生成html插件，如果创建多个HtmlWebpackPlugin的实例，就会生成多个页面
        new HtmlWebpackPlugin({
            // 生成html文件的名字，路径和生产环境下的不同，要与修改后的publickPath相结合，否则开启服务器后页面空白
            filename: 'index.html',
            // 源文件，路径相对于本文件所在的位置
            template: path.resolve(__dirname, '../dos/index.html'),
            // 需要引入entry里面的哪几个入口，如果entry里有公共模块，记住一定要引入
            chunks: ['vendors', 'index'],
            // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
            inject: 'body',
            // 生成html文件的标题
            title: 'KUI 使用文档'
            // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
            // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
        }),
       
        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 模块热替换插件
        // new webpack.LoaderOptionsPlugin({ minimize: true }),
    ]
})