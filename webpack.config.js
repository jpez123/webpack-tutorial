module.exports = {
	entry: ["./global.js", "./entry.js"],
	output: {
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}

		]
	},
	resolve: {
		extensions: ['*', '.js', '.es6']
	},
	watch: true
}