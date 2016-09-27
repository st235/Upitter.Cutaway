const ADD_COMPANY = company => {
	return {
		type: 'ADD_COMPANY',
		company
	};
};

const UPDATE_COMPANY_CATEGORIES = categories => {
	return {
		type: 'UPDATE_COMPANY_CATEGORIES',
		categories
	};
};

const SUBSCRIBE_TO_COMPANY = () => {
	return {
		type: 'SUBSCRIBE_TO_COMPANY'
	};
};

export { ADD_COMPANY, UPDATE_COMPANY_CATEGORIES, SUBSCRIBE_TO_COMPANY };
export default { ADD_COMPANY, UPDATE_COMPANY_CATEGORIES, SUBSCRIBE_TO_COMPANY };