import React from 'react';

import BaseLayout from '../components/baseLayout/baseLayout';
import Loading from '../components/loading/loadingComponent';
import UnauthorizedModal from '../components/unauthorizedModal/unauthorizedModalComponent';
import ErrorMessage from '../components/errorMessage/errorMessageComponent';

export default class IndexLayout extends BaseLayout {
	render() {
		const { children } = this.props;
		const { loading } = this.store.getState();

		// TODO: Доделать модалку авторизации
		return (
			<div>
				<Loading shouldBeShown={ loading.isShown } />
				<ErrorMessage />
				<UnauthorizedModal showUnaothorized={ false } />
				{ children }
			</div>
		);
	}
}
