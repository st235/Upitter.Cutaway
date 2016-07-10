const ADD_ERROR = (errorType, message) => {
	return {
		type: 'ADD_ERROR',
		errorType,
		message
	};
};

const REMOVE_ERROR = errorType => {
	return {
		type: 'ADD_ERROR',
		errorType
	};
};

export { ADD_ERROR, REMOVE_ERROR };
export default { ADD_ERROR, REMOVE_ERROR };
