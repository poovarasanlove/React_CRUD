const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:'./src/index.js',
	output: {
		path: path.resolve(__dirname, '/dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{	
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test:/\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	resolve: {
	  modules: [path.resolve(__dirname, './src'), 'node_modules'],
	  extensions: ['.js', '.jsx', '.json'],
	},
	devServer: {
	    historyApiFallback: true,
	    headers: {
	      'Access-Control-Allow-Origin': '*'
		}
  	},
	plugins: [
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		})
	]
}