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
				test: /\.(svg|jpe?g|png|eot|ttf|woff|woff2?)$/,
				exclude: /node_modules/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'static/[name]-[hash:8].[ext]',
					},
				},
			},
			{	
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test:/\.(js|jsx)$/,
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