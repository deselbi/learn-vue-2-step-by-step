
let webpack = require('webpack');

let path = require('path');



module.exports =  {
    mode: process.env.NODE_ENV,
    entry: {
        app: './resources/js/app.js',
        vendor: ['vue', 'axios']
    },
    output: {
        path: path.resolve(__dirname).concat('/public/js'),
        filename: '[name].js',
        publicPath: './public'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },


    plugins: []
};

