const path = require('path');

module.exports = {
    entry: './src/js/script.js',
    output: {
        filename: './js/script.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};