'use strict';

const OptionalMenuReducer = (state = '', action) => {
	switch (action.type) {
	case 'TOGGLE_MENU_OPENED':
		return action.postId || '';
	default:
		return state;
	}
};

export default OptionalMenuReducer;