'use strict';

const path = require('path');

module.exports = dir => {
	const templatePath = path.join(dir, 'templates', 'index.hbs');

	return {
		title: 'Upitter VisitCard',
		cache: true,
		host: 'http://62.76.179.37:8003',
		template: templatePath,
		inject: false
	};
};
