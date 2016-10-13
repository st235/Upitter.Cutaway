'use strict';

const initialState = {
	reportModalShown: false,
	chosenReport: null
};

const ReportReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SHOW_REPORT_MODAL':
			return Object.assign({}, state, { reportModalShown: !state.reportModalShown });
		case 'SELECT_REPORT_TYPE':
			return Object.assign({}, state, { chosenReport: action.chosenReport });
		default:
			return state;
	}
};

export default ReportReducer;