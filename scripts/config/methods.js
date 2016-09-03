'use strict';

import { baseServerUrl, fileServerUrl } from './http';

export default {
	company: {
		getSubscribers: `${baseServerUrl}/company/subscribers`,
		findByAlias: `${baseServerUrl}/company`
	},

	user: {
		toggleSubscription: `${baseServerUrl}/user/toggle_subscription/:companyId`
	},

	post: {
		like: `${baseServerUrl}/post/like/:postId`,
		favorite: `${baseServerUrl}/post/favorite/:postId`,
		obtainByAlias: `${baseServerUrl}/post/obtainByAlias`
	},

	comment: {
		addComment: `${baseServerUrl}/comment/create`,
		editComment: `${baseServerUrl}/comment/edit`,
		removeComment: `${baseServerUrl}/comment/remove`
	},

	category: {
		obtainTitles: `${baseServerUrl}/categories/obtainTitles`
	}
};
