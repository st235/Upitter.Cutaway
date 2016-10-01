import React from 'react';

import BaseLayout from '../components/baseLayout/baseLayout';
import Loading from '../components/independentComponents/loading/loadingComponent';
import UnauthorizedModal from '../components/independentComponents/unauthorizedModal/unauthorizedModalComponent';
import ErrorMessage from '../components/independentComponents/errorMessage/errorMessageComponent';
import ShowOnMap from '../components/independentComponents/showOnMap/showOnMapComponent';

import Unauthorized from '../components/independentComponents/unauthorizedModal/unauthorizedModalComponent';

import { TOGGLE_MENU_OPENED } from '../actions/optionalMenuActions';
import { TOGGLE_UNAUTHORIZED} from '../actions/unauthorizedActions';

export default class IndexLayout extends BaseLayout {
	onBind() {
		this.disableAllOptionalMenus = this.disableAllOptionalMenus.bind(this);
		this.closeUnauthorized = this.closeUnauthorized.bind(this);
	}

	closeUnauthorized() {
		this.store.dispatch(TOGGLE_UNAUTHORIZED());
	}

	disableAllOptionalMenus() {
		this.store.dispatch(TOGGLE_MENU_OPENED());
	}

	render() {
		const { children } = this.props;
		const { loading, unauthorized, showOnMap } = this.store.getState();

		return (
			<div onClick={ this.disableAllOptionalMenus }>
				<Unauthorized  />
				<Loading shouldBeShown={ loading.isShown } />
				<ErrorMessage />
				<UnauthorizedModal showUnauthorized={ unauthorized.show } closeModal={ this.closeUnauthorized } />
				<ShowOnMap
					show={ showOnMap.show }
					latitude={ showOnMap.latitude }
					longitude={ showOnMap.longitude }
					icon={ showOnMap.icon }
					text={ showOnMap.text }
				/>
				{ children }
			</div>
		);
	}
}
