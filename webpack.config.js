const webpack = require("webpack");
module.exports = {
	entry: ["./src/index.js"],
	output: {
		path: __dirname,
		publicPath: "/",
		filename: "bundle.js",
		libraryTarget: "umd", // make the bundle export
		externals: {
			react: {
				// import react from an external module so you done have multiple
				commonjs: "react",
				amd: "react"
			},
			"react-dom": {
				// some versions of react had links to react-dom so its good to include this
				commonjs: "react-dom",
				amd: "react-dom"
			}
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(), //dedupe similar code
		new webpack.optimize.UglifyJsPlugin(), //minify everything
		new webpack.optimize.AggressiveMergingPlugin() //Merge chunks
	],
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: "babel",
				query: {
					presets: ["react", "es2015", "stage-1"]
				}
			}
		]
	},
	resolve: {
		extensions: ["", ".js", ".jsx"]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: "./",
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		disableHostCheck: true
	}
};
