'use strict';

import { List } from 'immutable';

function findPostById(list, postId) {
	const post = list.find(item => item.customId === postId);
	const index = list.indexOf(post);
	return { post, index};
}

function replacePostWith(list, index, post) {
	return list.set(index, post);
}

const PostsReducer = (state = new List(), action) => {
	switch (action.type) {
	case 'ADD_POSTS':
		return state.concat(new List(action.posts));
	case 'VOTE':
		const { post, index } = findPostById(state, action.postId);
		post.variants[action.variantIndex].voters.push(action.userId);
		post.variants[action.variantIndex].count++;
		post.isVotedByMe = true;
		return replacePostWith(state, index, post);
	case 'LIKE':
		return state.concat(new List(action.posts));
	case 'ADD_TO_FAVORITES':
		return state.concat(new List(action.posts));
	default:
		return state;
	}
};

export default PostsReducer;
