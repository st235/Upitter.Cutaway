import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import IndexLayout from '../layouts/indexLayout';
import MainView from '../layouts/main/mainView';
import CompanyView from '../layouts/company/companyView';
import View404 from '../layouts/404/404View';
import SuccessView from '../layouts/authorization/success/successView';
import FailureView from '../layouts/authorization/failure/failureView';

import LocationService from '../services/locationService';

function successLoginRouteEntered(nextState, replaceFunc, callback) {
	callback();
}

function routesSaver(nextState, replaceFunc, callback) {
	LocationService.setPreviousPath(nextState.location.pathname);
	callback();
}

export default (
	<Route path="/" component={ IndexLayout }>
		<IndexRoute component={ MainView } />
		<Route path="/authorization/success" component={ SuccessView } onEnter={ successLoginRouteEntered } />
		<Route path="/authorization/failure" component={ FailureView } />
		<Route path="/404/:alias" component={ View404 } />
		<Route path="/:alias" component={ CompanyView } onEnter={ routesSaver } />
		<Redirect from="*" to="/" />
	</Route>
);
