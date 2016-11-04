'use strict';

const ReportsReducer = (state = null, action) => {
	switch (action.type) {
		case 'TOGGLE_REPORT_DIALOG':
			return action.post ? action.post : null;
		default:
			return state;
	}
};

export default ReportsReducer;