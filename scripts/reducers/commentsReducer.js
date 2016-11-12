'use strict';

import { Map, List } from 'immutable';

function getCommentsListByPostId(commentsMap, postId) {
	return commentsMap.get(postId);
}

function setCommentsListByPostId(commentsMap, postId, commentsList) {
	return commentsMap.set(postId, commentsList);
}

function addComments(commentsMap, postId, newCommentsArr) {
	if (!newCommentsArr || !newCommentsArr.length) return commentsMap;
	const commentsList = getCommentsListByPostId(commentsMap, postId);
	if (!commentsList || !commentsList.size) return setCommentsListByPostId(commentsMap, postId, new List(newCommentsArr));
	return setCommentsListByPostId(commentsMap, postId, commentsList.push(...newCommentsArr));
}

function addComment(commentsMap, postId, newComment) {
	const commentsList = getCommentsListByPostId(commentsMap, postId);
	if (!commentsList || !commentsList.size) return setCommentsListByPostId(commentsMap, postId, new List([newComment]));
	return setCommentsListByPostId(commentsMap, postId, commentsList.push(newComment));
}

const CommentsReducer = (state = new Map(), action) => {
	switch (action.type) {
	case 'ADD_COMMENTS':
		return addComments(state, action.postId, action.comments);
	case 'ADD_NEW_COMMENT':
		return addComment(state, parseInt(action.postId), action.comment);
	case 'EDIT_COMMENT':
		return state;
	case 'DELETE_COMMENT':
		return state;
	default:
		return state;
	}
};

export default CommentsReducer;
