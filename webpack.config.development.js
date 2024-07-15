import { merge } from 'webpack-merge';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';
const __dirname = import.meta.dirname;

import baseConfig from './webpack.config.base.js';

export default merge(baseConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: [
                                    'last 2 versions',
                                    'not dead',
                                    'not < 2%',
                                ],
                            },
                        ],
                        '@babel/preset-react',
                    ],
                    plugins: ['react-refresh/babel'],
                },
            },
        ],
    },
    plugins: [new ReactRefreshPlugin()],
    devServer: {
        port: 8080,
        open: true,
        historyApiFallback: true,
    },
    devtool: 'source-map',
});
