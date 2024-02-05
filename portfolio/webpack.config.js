const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: './js/index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};