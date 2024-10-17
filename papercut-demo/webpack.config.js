const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const { papercut } = require('webpack');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [path.resolve(__dirname, 'src')],
                use: 'ts-loader',
            },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'demo',
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        watchFiles: ["src/*.html", "node_modules/papercut/**/*"],
        hot: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};