'use strict';

const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');

const postCssConfig = require('./postcss');

module.exports = dir => {
	const folder = path.join(dir, 'config');
	const output = path.join(dir, 'dist');
	const filename = 'application.css';

	return {
		context: dir,
		cache: true,
		entry: {
			BundleConfig: [path.join(folder, 'bundle.js')]
		},
		output: {
			path: output,
			filename: filename
		},
		plugins: [
			new extractTextPlugin(filename)
		],
		module: {
			loaders: [
				{
					test: /\.(scss|sass|css)$/,
					loader: extractTextPlugin.extract('style', 'css!postcss!sass')
				},
				{
					test: /\.(png|jpg|gif|jpeg)(\?.+)?$/,
					loader: 'url-loader?limit=32768&name=[path][name].[ext]'
				},
				{
					test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
					loader: 'url-loader?limit=8192&name=[name].[ext]'
				}
			]
		},
		postcss: () => postCssConfig
	};
};
