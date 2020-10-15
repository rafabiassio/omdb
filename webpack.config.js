const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
	entry: [
		"@babel/polyfill",
		path.resolve(__dirname, "src", "index.js")
	],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			},
			{
				test: /\.(png|gif|jpe?g|woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
				},
			},
		],
	},
	plugins: [
		new Dotenv()
	]
}
