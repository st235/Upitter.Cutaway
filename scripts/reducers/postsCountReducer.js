'use strict';

const PostsCountReducer = (state = null, action) => {
	switch (action.type) {
	case 'SET_POSTS_COUNT':
		return action.count;
	default:
		return state;
	}
};

export default PostsCountReducer;