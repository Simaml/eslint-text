const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React组件化',
            template: path.resolve('./dist/index.html'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            ['import', { libraryName: 'antd', style: true }]  // `style: true` 会加载 less 文件  
                        ],
                        compact: true,
                        presets: [
                            "@babel/react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(css|less|sass)$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4500
    }
}