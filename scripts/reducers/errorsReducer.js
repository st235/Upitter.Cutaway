import { Map } from 'immutable';

const ErrorsReducer = (state = new Map(), action) => {
	switch (action.type) {
		case 'ADD_ERROR':
			return state.set(action.errorType, action.message);
		case 'REMOVE_ERROR':
			return state.set(action.errorType, null);
		default:
			return state;
	}
};

export default ErrorsReducer;