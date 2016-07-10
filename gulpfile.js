'use strict';

const gulp = require('gulp');
const path = require('path');
const gulpSync = require('gulp-sync')(gulp);
const gulpUtils = require('gulp-util');
const webpack = require('webpack');
const ncp = require('ncp').ncp;

const webpackScripts = require('./config/scripts')(__dirname);

const imageOriginFolder = path.join(__dirname, 'images');
const stylesOriginFolder = path.join(__dirname, 'styles');
const themesOriginFolder = path.join(__dirname, 'themes');
const imageDestinationFolder = path.join(__dirname, 'dist/images');
const stylesDestinationFolder = path.join(__dirname, 'dist');
const themesDestinationFolder = path.join(__dirname, 'dist');

gulp.task('Build_Scripts', callback => {
	webpack(webpackScripts, (error, status) => {
		if (error) throw new gulpUtils.PluginError('webpack', error);
		gulpUtils.log('[Build Scripts]', status.toString({ colors: true }));
		callback();
	});
});

gulp.task('Copy_Styles', callback => {
	ncp(imageOriginFolder, imageDestinationFolder, error => {
		if (error) gulpUtils.log('[Copy Styles]', 'There was an error while copying styles');
		gulpUtils.log('[Copy Styles]', 'Good boy - cowboy');
		callback();
	});
});

gulp.task('Copy_Images', callback => {
	ncp(stylesOriginFolder, stylesDestinationFolder, error => {
		if (error) gulpUtils.log('[Copy Images]', 'There was an error while copying images');
		gulpUtils.log('[Copy Images]', 'Good boy - cowboy');
		callback();
	});
});

gulp.task('Copy_Themes', callback => {
	ncp(themesOriginFolder, themesDestinationFolder, error => {
		if (error) gulpUtils.log('[Copy Themes]', 'There was an error while copying themes');
		gulpUtils.log('[Copy Themes]', 'Good boy - cowboy');
		callback();
	});
});

gulp.task('Build', gulpSync.async(['Build_Scripts', 'Copy_Styles', 'Copy_Images', 'Copy_Themes']));
