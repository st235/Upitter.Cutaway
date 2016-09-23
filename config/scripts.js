'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = dir => {
	const htmlConfig = require('./html')(dir);
	const folder = path.join(dir, 'scripts');
	const output = path.join(dir, 'dist');
	const filename = '[name].js';

	return {
		context: dir,
		cache: true,
		entry: {
			application: path.join(folder, 'application.js')
		},
		output: {
			path: output,
			filename
		},
		plugins: [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new HtmlWebpackPlugin(htmlConfig)
		],
		module: {
			loaders: [
				{
					test: /\.js?$/,
					exclude: /(node_modules)/,
					loader: 'babel',
					query: {
						presets: ['es2015', 'react']
					}
				},
				{
					test: /\.hbs$/,
					loader: 'handlebars'
				}
			]
		}
	};
};
