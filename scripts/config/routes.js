import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import IndexLayout from '../layouts/indexLayout';
import MainView from '../layouts/main/mainView';
import CompanyView from '../layouts/company/companyView';

export default (
	<Route path="/" component={IndexLayout}>
		<IndexRoute component={MainView} />
		<Route path="/:companyName" component={CompanyView} />
		<Redirect from="*" to="/" />
	</Route>
);
