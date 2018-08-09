import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = {
    entry: [
        path.join(__dirname, '../', 'src', 'app'),
    ],

    output: {
        path: path.join(__dirname, '../', 'dist'),
        filename: 'js/[name]_[hash].js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /src\/styles\/vendor/],
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(jpg|svg)$/,
                use: {
                    loader: 'file-loader?name=/images/[name].[ext]',
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "'css/[name]_[contenthash].css'",
            chunkFilename: "css/[id].css",
        })
    ],
}

export default config;
