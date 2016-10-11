'use strict';

import { baseServerUrl, fileServerUrl } from './http';

export default {
	company: {
		getSubscribers: `${baseServerUrl}/company/subscribers`,
		findByAlias: `${baseServerUrl}/company`
	},

	user: {
		profile: `${baseServerUrl}/profile`,
		toggleSubscription: `${baseServerUrl}/user/toggle_subscription`
	},

	post: {
		like: `${baseServerUrl}/post/like`,
		favorite: `${baseServerUrl}/post/favorite`,
		vote: `${baseServerUrl}/post/favorite`,
		obtainByAlias: `${baseServerUrl}/post/obtainByAlias`
	},

	comment: {
		addComment: `${baseServerUrl}/comment/create`,
		editComment: `${baseServerUrl}/comment/edit`,
		removeComment: `${baseServerUrl}/comment/remove`
	},

	category: {
		obtainTitles: `${baseServerUrl}/categories/obtainTitles`
	},

	external: {
		vk: 'https://oauth.vk.com/authorize?client_id=5624119&redirect_uri=https://oauth.vk.com/blank.html&scope=12&display=popup'
	}
};
