import { merge } from 'webpack-merge';

import baseConfig from './webpack.config.base.js';

export default merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    devtool: 'source-map',
});
