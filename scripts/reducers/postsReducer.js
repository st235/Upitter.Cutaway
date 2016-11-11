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
		const postId = action.postId;
		const userId = action.userId.toString();
		const postInfo = findPostById(state, postId);

		if (postInfo.post.likeVoters && postInfo.post.likeVoters.length && (postInfo.post.likeVoters.indexOf(userId) > -1)) {
			postInfo.post.likeVoters = _.without(postInfo.post.likeVoters, userId);
			postInfo.post.likesAmount--;
			postInfo.post.isLikedByMe = false;
		} else {
			postInfo.post.likeVoters.push(userId);
			postInfo.post.likesAmount++;
			postInfo.post.isLikedByMe = true;
		}

		return replacePostWith(state, postInfo.index, postInfo.post);
	case 'ADD_TO_FAVORITES':
		const foundPostId = action.postId;
		const foundUserId = action.userId.toString();
		const foundPostInfo = findPostById(state, foundPostId);

		if (foundPostInfo.post.favoriteVoters && foundPostInfo.post.favoriteVoters.length && (foundPostInfo.post.favoriteVoters.indexOf(foundUserId) > -1)) {
			foundPostInfo.post.favoriteVoters = _.without(foundPostInfo.post.favoriteVoters, foundUserId);
			foundPostInfo.post.favoritesAmount--;
			foundPostInfo.post.isFavoriteByMe = false;
		} else {
			foundPostInfo.post.favoriteVoters.push(foundUserId);
			foundPostInfo.post.favoritesAmount++;
			foundPostInfo.post.isFavoriteByMe = true;
		}

		return replacePostWith(state, foundPostInfo.index, foundPostInfo.post);
	case 'TOGGLE_COMMENTS':
		const postIdToShowComments = action.postId;
		const postInfoToShowComments = findPostById(state, postIdToShowComments);

		postInfoToShowComments.post.showComments = !postInfoToShowComments.post.showComments;

		return replacePostWith(state, postInfoToShowComments.index, postInfoToShowComments.post);
	case 'INCREMENT_COMMENTS_AMOUNT':
		const postInfoToIncrementCommentsCount = findPostById(state, parseInt(action.postId));
		postInfoToIncrementCommentsCount.post.commentsAmount++;

		return replacePostWith(state, postInfoToIncrementCommentsCount.index, postInfoToIncrementCommentsCount.post);
	default:
		return state;
	}
};

export default PostsReducer;
