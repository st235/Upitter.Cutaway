'use strict';

const PostsCountReducer = (state = 0, action) => {
	switch (action.type) {
	case 'SET_POSTS_COUNT':
		return action.count;
	default:
		return state;
	}
};

export default PostsCountReducer;