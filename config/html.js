'use strict';

const path = require('path');

module.exports = dir => {
	const templatePath = path.join(dir, 'templates', 'index.hbs');

	return {
		title: 'Upitter VisitCard',
		cache: true,
		host: 'http://127.0.0.1:8003',
		template: templatePath,
		inject: false
	};
};
