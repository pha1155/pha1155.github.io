const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: './js/index.bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'PARK HYOEN AH`s portfolio',
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template: './src/index.ejs'
		})
	],
	mode: 'development',
};