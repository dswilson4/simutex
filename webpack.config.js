const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        editor: path.resolve(__dirname, 'frontend', 'js', 'editor', 'index.js')
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    output: {
        path: path.resolve(__dirname, 'frontend', 'public', 'dist', 'js', 'editor'),
        filename: '[name].bundle.js',
        libraryTarget: 'var',
        library: 'editor'
    }
};