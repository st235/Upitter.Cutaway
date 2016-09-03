const TOGGLE_MENU_OPENED = (postId) => {
	return {
		type: 'TOGGLE_MENU_OPENED',
		postId
	};
};

export { TOGGLE_MENU_OPENED };
export default { TOGGLE_MENU_OPENED };