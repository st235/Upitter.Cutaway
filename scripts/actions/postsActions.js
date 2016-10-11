const ADD_POSTS = (posts) => {
	return {
		type: 'ADD_POSTS',
		posts
	};
};

const VOTE = (postId, variantIndex, userId) => {
	return {
		type: 'VOTE',
		postId,
		variantIndex,
		userId
	};
};

const LIKE = (postId, userId) => {
	return {
		type: 'LIKE',
		postId,
		userId
	};
};

const ADD_TO_FAVORITES = (postId) => {
	return {
		type: 'ADD_TO_FAVORITES',
		postId
	};
};

export { ADD_POSTS, VOTE, LIKE, ADD_TO_FAVORITES };
export default { ADD_POSTS, VOTE, LIKE, ADD_TO_FAVORITES };
