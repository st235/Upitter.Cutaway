'use strict';

import loadingUtils from '../utils/loadingUtils';

const initialState = {
	showLoadingIdentifiers: {},
	isShown: false
};

const LoadingReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'TOGGLE_LOADING':
		const showLoadingIdentifiers = state.showLoadingIdentifiers;
		const identifier = action.identifier;
		showLoadingIdentifiers[identifier] = !showLoadingIdentifiers[identifier];
		const isShown = loadingUtils.loadingShouldBeShown(showLoadingIdentifiers);
		return Object.assign({}, state, { showLoadingIdentifiers, isShown });
	default:
		return state;
	}
};

export default LoadingReducer;
