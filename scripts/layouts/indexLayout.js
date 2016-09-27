import React from 'react';

import BaseLayout from '../components/baseLayout/baseLayout';
import Loading from '../components/independentComponents/loading/loadingComponent';
import UnauthorizedModal from '../components/independentComponents/unauthorizedModal/unauthorizedModalComponent';
import ErrorMessage from '../components/independentComponents/errorMessage/errorMessageComponent';
import ShowOnMap from '../components/independentComponents/showOnMap/showOnMapComponent';

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
		const { loading, authModal, showOnMap } = this.store.getState();

		return (
			<div onClick={ this.disableAllOptionalMenus }>
				<Loading shouldBeShown={ loading.isShown } />
				<ErrorMessage />
				<UnauthorizedModal showUnauthorized={ authModal } />
				<ShowOnMap
					show={ showOnMap.show }
					latitude={ showOnMap.latitude }
					longitude={ showOnMap.longitude }
					icon={ showOnMap.icon }
				/>
				{ children }
			</div>
		);
	}
}
