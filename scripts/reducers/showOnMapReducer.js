'use strict';

const initialState = {
	show: false
};

const ShowOnMapReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'OPEN_SHOW_ON_MAP':
		return Object.assign({}, state, {
			latitude: action.latitude,
			longitude: action.longitude,
			icon: action.icon,
			text: action.text,
			show: true
		});
	case 'CLOSE_SHOW_ON_MAP':
		return { show: false };
	default:
		return state;
	}
};

export default ShowOnMapReducer;