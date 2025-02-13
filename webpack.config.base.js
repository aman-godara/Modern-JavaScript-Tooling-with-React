import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const __dirname = import.meta.dirname;

export default {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, 'src'),
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
