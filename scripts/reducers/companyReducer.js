'use strict';

const CompanyReducer = (state = {}, action) => {
	switch (action.type) {
	case 'ADD_COMPANY':
		return Object.assign({}, state, action.company);
	case 'UPDATE_COMPANY_CATEGORIES':
		return Object.assign({}, state, { activity: action.categories });
	case 'SUBSCRIBE_TO_COMPANY':
		const isMySubscription = state.isMySubscription;
		let subscribersAmount;
		try {
			subscribersAmount = parseInt(state.subscribersAmount);
		} catch (e) {
			subscribersAmount = 0;
		}

		isMySubscription ? subscribersAmount-- : subscribersAmount++;

		return Object.assign({}, state, { isMySubscription: !state.isMySubscription, subscribersAmount });
	default:
		return state;
	}
};

export default CompanyReducer;