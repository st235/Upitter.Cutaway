import { combineReducers } from 'redux';

import loading from './loadingReducer';
import company from './companyReducer';
import error from './errorsReducer';

export default combineReducers({
	loading,
	company,
	error
});
