const OPEN_SHOW_ON_MAP = (latitude, longitude, icon, text) => {
	return {
		type: 'OPEN_SHOW_ON_MAP',
		latitude,
		longitude,
		icon,
		text
	};
};

const CLOSE_SHOW_ON_MAP = () => {
	return {
		type: 'CLOSE_SHOW_ON_MAP'
	};
};


export { OPEN_SHOW_ON_MAP, CLOSE_SHOW_ON_MAP };
export default { OPEN_SHOW_ON_MAP, CLOSE_SHOW_ON_MAP };