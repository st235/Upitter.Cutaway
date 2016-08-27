import { Map } from 'immutable';

const ErrorsReducer = (state = new Map(), action) => {
	switch (action.type) {
		case 'ADD_ERROR':
			const intermediateState = state.set(action.errorType, action.message);
			return intermediateState.set('currentError', action.message);
		case 'REMOVE_ERROR':
			const removalIntermediateState = state.set(action.errorType, null);
			return removalIntermediateState.set('currentError', action.message);
		default:
			return state;
	}
};

export default ErrorsReducer;
