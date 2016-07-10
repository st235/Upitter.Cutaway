import { combineReducers } from 'redux';

import loading from './loadingReducer';
import company from './companyReducer';

export default combineReducers({
	loading,
	company
});
