import { merge } from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import baseConfig from './webpack.config.base.js';

export default merge(baseConfig, {
    mode: 'production',
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
