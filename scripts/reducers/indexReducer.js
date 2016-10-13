import { combineReducers } from 'redux';

import loading from './loadingReducer';
import company from './companyReducer';
import error from './errorsReducer';
import posts from './postsReducer';
import postsCount from './postsCountReducer';
import optionalMenu from './optionalMenuReducer';
import comments from './commentsReducer';
import showOnMap from './showOnMapReducer';
import unauthorized from './unauthorizedReducer';
import report from './reportReducer';

export default combineReducers({
	loading,
	company,
	error,
	posts,
	postsCount,
	optionalMenu,
	comments,
	unauthorized,
	showOnMap,
	report
});
