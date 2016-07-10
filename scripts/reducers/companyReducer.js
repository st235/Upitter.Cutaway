'use strict';

const CompanyReducer = (state = {}, action) => {
	switch (action.type) {
		case 'EDIT_COMPANY_INFO':
			return Object.assign({}, state, action.info);
		default:
			return state;
	}
};

export default CompanyReducer;