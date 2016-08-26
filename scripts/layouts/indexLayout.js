import React from 'react';

import BaseLayout from '../components/baseLayout/baseLayout';
import Loading from '../components/loading/loadingComponent';

export default class IndexLayout extends BaseLayout {
	render() {
		const { children } = this.props;
		const { loading } = this.store.getState();

		return (
			<div>
				<Loading shouldBeShown={ loading.showLoading } />
				{ children }
			</div>
		);
	}
}
