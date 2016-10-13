const SHOW_REPORT_MODAL = () => {
	return {
		type: 'SHOW_REPORT_MODAL'
	};
};

const SELECT_REPORT_TYPE = (chosenReport) => {
	return {
		type: 'SELECT_REPORT_TYPE',
		chosenReport
	};
};

export { SHOW_REPORT_MODAL, SELECT_REPORT_TYPE };
export default { SHOW_REPORT_MODAL, SELECT_REPORT_TYPE };