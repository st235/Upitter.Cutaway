'use strict';

import { List } from 'immutable';

const PostsReducer = (state = new List(), action) => {
	switch (action.type) {
	case 'ADD_POSTS':
		return state.merge(action.posts);
	default:
		return state;
	}
};

export default PostsReducer;