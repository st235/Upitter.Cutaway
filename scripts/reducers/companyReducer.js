'use strict';

const CompanyReducer = (state = {}, action) => {
	switch (action.type) {
	case 'ADD_COMPANY':
		return Object.assign({}, state, action.company);
	case 'UPDATE_COMPANY_CATEGORIES':
		return Object.assign({}, state, { activity: action.categories });
	case 'SUBSCRIBE_TO_COMPANY':
		return Object.assign({}, state, { isMySubscription: !state.isMySubscription });
	default:
		return state;
	}
};

export default CompanyReducer;