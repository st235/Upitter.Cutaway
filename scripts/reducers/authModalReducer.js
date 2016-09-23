'use strict';

const AuthModalReducer = (state = false, action) => {
	switch (action.type) {
	case 'TOGGLE_AUTH_MODAL':
		if (action.show || action.show === false) return action.show;
		return !state;
	default:
		return state;
	}
};

export default AuthModalReducer;