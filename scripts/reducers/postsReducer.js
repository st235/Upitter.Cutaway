'use strict';

import { List } from 'immutable';

const PostsReducer = (state = new List(), action) => {
	switch (action.type) {
	case 'ADD_POSTS':
		const result = state.concat(new List(action.posts));
		return result;
	default:
		return state;
	}
};

export default PostsReducer;
