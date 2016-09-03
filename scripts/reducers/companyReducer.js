'use strict';

const CompanyReducer = (state = {}, action) => {
	switch (action.type) {
	case 'ADD_COMPANY':
		return Object.assign({}, state, action.company);
	case 'UPDATE_COMPANY_CATEGORIES':
		return Object.assign({}, state, { activity: action.categories });
	default:
		return state;
	}
};

export default CompanyReducer;