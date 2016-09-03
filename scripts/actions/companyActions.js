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

export { ADD_COMPANY, UPDATE_COMPANY_CATEGORIES };
export default { ADD_COMPANY, UPDATE_COMPANY_CATEGORIES };