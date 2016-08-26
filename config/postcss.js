'use strict';

const cssnano = require('cssnano');

module.exports = [
	cssnano({
		autoprefixer: {
			browsers: ['last 2 versions']
		},
		calc: true,
		colormin: true,
		convertValues: true,
		discardComments: {
			removeAll: true
		},
		discardDuplicates: true,
		discardEmpty: true,
		discardUnused: true,
		mergeLonghand: true,
		mergeRules: true,
		minifyFontValues: false,
		minifySelectors: true,
		normalizeUrl: true,
		reduceTransform: true,
		zindex: true
	})
];
