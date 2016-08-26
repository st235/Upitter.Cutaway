import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import IndexLayout from '../layouts/indexLayout';
import MainView from '../layouts/main/mainView';
import CompanyView from '../layouts/company/companyView';
import View404 from '../layouts/404/404View';

export default (
	<Route path="/" component={ IndexLayout }>
		<IndexRoute component={ MainView } />
		<Route path="/:alias" component={ CompanyView } />
		<Route path="/404/:alias" component={ View404 } />
		<Redirect from="*" to="/" />
	</Route>
);
