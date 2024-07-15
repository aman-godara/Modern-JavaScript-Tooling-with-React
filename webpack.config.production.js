import { merge } from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import path from 'path';
const __dirname = import.meta.dirname;

import baseConfig from './webpack.config.base.js';

export default merge(baseConfig, {
    mode: 'production',
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
                },
            },
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
});
