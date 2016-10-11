const SET_ACCESS_TOKEN = (accessToken) => {
	return {
		type: 'SET_ACCESS_TOKEN',
		accessToken
	};
};

const SET_USER = (user) => {
	return {
		type: 'SET_USER',
		user
	};
};

const LOGOUT = () => {
	return {
		type: 'LOGOUT'
	};
};

export { SET_ACCESS_TOKEN, SET_USER, LOGOUT };
export default { SET_ACCESS_TOKEN, SET_USER, LOGOUT };