'use strict';

import { List } from 'immutable';
import _ from 'underscore';

function findPostById(list, postId) {
	const post = list.find(item => item.customId === postId);
	const index = list.indexOf(post);
	return { post, index };
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
		post.votersAmount++;
		post.isVotedByMe = true;
		return replacePostWith(state, index, post);
	case 'LIKE':
		const postInfo = findPostById(state, action.postId);

		if (postInfo.post.likeVoters && postInfo.post.likeVoters.length && (postInfo.post.likeVoters.indexOf(action.userId) > -1)) {
			postInfo.post.likeVoters = _.without(postInfo.post.likeVoters, action.userId);
			postInfo.post.likesAmount--;
			postInfo.post.isLikedByMe = false;
		} else {
			postInfo.post.likeVoters.push(action.userId);
			postInfo.post.likesAmount++;
			postInfo.post.isLikedByMe = true;
		}

		return replacePostWith(state, postInfo.index, postInfo.post);
	case 'ADD_TO_FAVORITES':
		const foundPostInfo = findPostById(state, action.postId);

		if (foundPostInfo.post.favoriteVoters && foundPostInfo.post.favoriteVoters.length && (foundPostInfo.post.favoriteVoters.indexOf(action.userId) > -1)) {
			foundPostInfo.post.favoriteVoters = _.without(foundPostInfo.post.favoriteVoters, action.userId);
			foundPostInfo.post.favoritesAmount--;
			foundPostInfo.post.isFavoriteByMe = false;
		} else {
			foundPostInfo.post.favoriteVoters.push(action.userId);
			foundPostInfo.post.favoritesAmount++;
			foundPostInfo.post.isFavoriteByMe = true;
		}

		return replacePostWith(state, foundPostInfo.index, foundPostInfo.post);
	default:
		return state;
	}
};

export default PostsReducer;
