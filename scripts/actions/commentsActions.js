const ADD_COMMENTS = (postId, comments) => {
	return {
		type: 'ADD_COMMENTS',
		postId,
		comments
	};
};

const EDIT_COMMENT = (postId, commentId, commentText) => {
	return {
		type: 'EDIT_COMMENT',
		postId,
		commentText
	};
};

const DELETE_COMMENT = (postId, commentId) => {
	return {
		type: 'DELETE_COMMENT',
		postId,
		commentId
	};
};

export { ADD_COMMENTS, EDIT_COMMENT, DELETE_COMMENT };
export default { ADD_COMMENTS, EDIT_COMMENT, DELETE_COMMENT };