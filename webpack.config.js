const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			'@fortawesome/fontawesome-free-solid$': '@fortawesome/fontawesome-free-solid/shakable.es.js'
		}
	},
	optimization: {
		minimizer: [
			new BabelMinifyPlugin()
		]
	}
};
