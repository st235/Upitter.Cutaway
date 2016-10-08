'use strict';

const initialState = {
	user: null,
	accessToken: null
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ACCESS_TOKEN':
			return Object.assign({}, state, { accessToken: action.accessToken });
		case 'SET_USER':
			return Object.assign({}, state, { user: action.user });
		case 'LOGOUT':
			return Object.assign({}, state, { user: action.user });
		default:
			return state;
	}
};

export default UserReducer;