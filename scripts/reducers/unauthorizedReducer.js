'use strict';

const initialState = { show: false };

const UnauthorizedReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_UNAUTHORIZED':
			return Object.assign({}, { show: !state.show });
		default:
			return state;
	}
};

export default UnauthorizedReducer;
