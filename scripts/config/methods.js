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
		obtain: `${baseServerUrl}/post/obtain`,
		obtainNew: `${baseServerUrl}/post/obtainNew`,
		obtainOld: `${baseServerUrl}/post/obtainOld`,
		like: `${baseServerUrl}/post/like/:postId`,
		favorite: `${baseServerUrl}/post/favorite/:postId`
	},

	comment: {
		addComment: `${baseServerUrl}/comment/create`,
		editComment: `${baseServerUrl}/comment/edit`,
		removeComment: `${baseServerUrl}/comment/remove`
	},

	category: {
		obtain: '/categories',
		find: '/categories/find/:id',
		getParent: '/categories/get/parent/:id'
	}
};
