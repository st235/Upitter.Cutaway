'use strict';

import StoreService from '../services/storeService';

export default {
	getPostById(postId) {
		const { posts } = StoreService.getStore().getState();
		return posts.find(post => post.get('customId') === postId);
	}
};