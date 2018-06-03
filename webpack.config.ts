import webpack = require('webpack');
import { Configuration } from 'webpack';
import path = require('path');
import { loader } from 'webpack-loader-helper';
const nodeExternals = require('webpack-node-externals');
const pollInterval = 1000;

module.exports = (options: any): Configuration => {
    return {
        entry: [`webpack/hot/poll?${pollInterval}`, './src/server.ts'],
        target: 'node',
        devtool: 'cheap-module-source-map',
        output: {
            path: `${__dirname}/app_bin`,
            filename: 'server.js',
        },
        mode: 'development',
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        externals: [
            nodeExternals({ whitelist: [`webpack/hot/poll?${pollInterval}`] }),
        ],
        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        loader('ts', { transpileOnly: true, compilerOptions: {} })
                    ]
                },
            ],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'development',
            }),
            new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
        ],
    };
};
