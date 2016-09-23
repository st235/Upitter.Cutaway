import React from 'react';

import BaseLayout from '../components/baseLayout/baseLayout';
import Loading from '../components/loading/loadingComponent';
import UnauthorizedModal from '../components/unauthorizedModal/unauthorizedModalComponent';
import ErrorMessage from '../components/errorMessage/errorMessageComponent';

import { TOGGLE_MENU_OPENED } from '../actions/optionalMenuActions';

export default class IndexLayout extends BaseLayout {
	onBind() {
		this.disableAllOptionalMenus = this.disableAllOptionalMenus.bind(this);
	}

	disableAllOptionalMenus() {
		this.store.dispatch(TOGGLE_MENU_OPENED());
	}

	render() {
		const { children } = this.props;
		const { loading, authModal } = this.store.getState();

		return (
			<div onClick={ this.disableAllOptionalMenus }>
				<Loading shouldBeShown={ loading.isShown } />
				<ErrorMessage />
				<UnauthorizedModal showUnauthorized={ authModal } />
				{ children }
			</div>
		);
	}
}
