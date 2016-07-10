const initialState = { showLoading: false };

const LoadingReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'TOGGLE_LOADING':
			return Object.assign({}, state, { showLoading: !state.showLoading });
		default:
			return state;
	}
};

export default LoadingReducer;
