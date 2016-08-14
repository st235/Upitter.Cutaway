'use strict';

const CompanyReducer = (state = {}, action) => {
	switch (action.type) {
	case 'ADD_COMPANY':
		return Object.assign({}, state, action.company);
	default:
		return state;
	}
};

export default CompanyReducer;