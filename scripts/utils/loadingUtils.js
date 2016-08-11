'use strict';

import _ from 'underscore';

export default {
	loadingShouldBeShown(identifiersList) {
		return _.some(identifiersList, identifier => {
			return identifier === true;
		});
	}
};
