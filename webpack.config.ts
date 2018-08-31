/* eslint-disable no-console, import/max-dependencies, tslint/config */
import webpack = require('webpack');
import { Configuration } from 'webpack';
import path = require('path');
import { loader } from 'webpack-loader-helper';
import WebpackNotifierPlugin = require('webpack-notifier');
import nodeExternals = require('webpack-node-externals');

const pollInterval = 1000;
const defaultOptions = {
    test: false,
    coverage: false,
    prod: process.argv.indexOf('--mode=production') !== -1 || process.argv.indexOf('--env.prod') !== -1,
    get dev(): boolean {
        return !this.prod;
    },
    get mode() {
        return this.prod ? 'production' : 'development';
    },
    devtool: 'inline-cheap-module-source-map',
};

type ConfigOptions = Partial<Record<keyof typeof defaultOptions, any>>;

module.exports = (options: ConfigOptions = {}): Configuration => {
    options = { ...defaultOptions, ...options };
    for (const [key, value] of Object['entries'](options)) {
        (value === true) ? process.stdout.write(`${key} `) : (process.stdout.write(value ? `${key}:${value} ` : ''));
    }
    return {
        entry: [`webpack/hot/poll?${pollInterval}`, './src/server.ts'],
        target: 'node',
        devtool: options.devtool,
        output: {
            path: `${__dirname}/app_bin`,
            filename: 'server.js',
        },
        mode: options.mode,
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
                PROGRAM: 'webpack',
                NODE_ENV: 'development',
            }),
            new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
            new WebpackNotifierPlugin({ excludeWarnings: true, sound: false }),
        ],
    };
};
