'use strict';

import httpConfig from './http';

export default {
	company: {
		getSubscribers: `${httpConfig.UPITTER_SERVER}/company/subscribers`,
		findByAlias: `${httpConfig.UPITTER_SERVER}/company/`
	}
};
