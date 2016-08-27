import React from 'react';

import BaseLayout from '../components/baseLayout/baseLayout';
import Loading from '../components/loading/loadingComponent';
import UnauthorizedModal from '../components/unauthorizedModal/unauthorizedModalComponent';

export default class IndexLayout extends BaseLayout {
	render() {
		const { children } = this.props;
		const { loading } = this.store.getState();

		// TODO: Доделать модалку авторизации
		return (
			<div>
				<Loading shouldBeShown={ loading.isShown } />
				<UnauthorizedModal showUnaothorized={ false } />
				{ children }
			</div>
		);
	}
}
