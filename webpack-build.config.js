const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new TerserPlugin({
            terserOptions: {
                mangle: false,
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: 'defaults',
                                    },
                                ],
                                [
                                    '@babel/preset-react',
                                    {
                                        runtime: 'automatic',
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
