
let webpack = require('webpack');

let path = require('path');

console.log(path.resolve(__dirname).concat('/public/js'));

module.exports =  {

    entry: './resources/js/app.js',
    output: {
        path: path.resolve(__dirname).concat('/public/js'),
        filename: 'bundle.js',
        publicPath: './public'
    },

    resolve: { alias: { vue: 'vue/dist/vue.esm.js' } }


}
