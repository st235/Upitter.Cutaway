'use strict';

const gulp = require('gulp');
const path = require('path');
const gulpSync = require('gulp-sync')(gulp);
const gulpUtils = require('gulp-util');
const webpack = require('webpack');
const ncp = require('ncp').ncp;

const webpackScripts = require('./config/scripts')(__dirname);
const webpackStyles = require('./config/styles')(__dirname);

const WebpackDevServer = require('webpack-dev-server');

const imageOriginFolder = path.join(__dirname, 'images');
const fontsOriginFolder = path.join(__dirname, 'fonts');
const imageDestinationFolder = path.join(__dirname, 'dist/images');
const fontsDestinationFolder = path.join(__dirname, 'dist/fonts');

gulp.task('DEV_SERVER', callback => {
	var compiler = webpack(webpackScripts);

	new WebpackDevServer(compiler, {
		contentBase: './dist',
		historyApiFallback: true,
		headers: { 'Access-Control-Allow-Origin': '*' }
	}).listen(8003, 'localhost', error => {
		if (error) throw new gulpUtils.PluginError('webpack-dev-server', error);
		gulpUtils.log('[webpack-dev-server]', 'localhost:8003');
	});
});

gulp.task('Build_Scripts', callback => {
	webpack(webpackScripts, (error, status) => {
		if (error) throw new gulpUtils.PluginError('webpack', error);
		gulpUtils.log('[Build Scripts]', status.toString({ colors: true }));
		callback();
	});
});

gulp.task('Build_Styles', callback => {
	webpack(webpackStyles, (error, status) => {
		if (error) throw new gulpUtils.PluginError('webpack', error);
		gulpUtils.log('[Build Styles]', status.toString({ colors: true }));
		callback();
	});
});

gulp.task('Copy_Images', callback => {
	ncp(imageOriginFolder, imageDestinationFolder, error => {
		if (error) gulpUtils.log('[Copy Images]', 'There was an error while copying images');
		gulpUtils.log('[Copy Images]', 'Good boy - cowboy');
		callback();
	});
});

gulp.task('Copy_Fonts', callback => {
	ncp(fontsOriginFolder, fontsDestinationFolder, error => {
		if (error) gulpUtils.log('[Copy Fonts]', 'There was an error while copying fonts');
		gulpUtils.log('[Copy Fonts]', 'Good font - cowboy');
		callback();
	});
});

gulp.task('Build', gulpSync.async(['Build_Scripts', 'Build_Styles', 'Copy_Images', 'Copy_Fonts']));