'use strict';

import React from 'react';
import BaseLayout from '../../../../baseLayout/baseLayout';

class SubscribeButtonComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { company } = this.store.getState();

		return (
			//TODO: Доделать число подписчиков
			//TODO: Что делать, если подписан?
			<div className="profile-follow">
				<div className="btn btn--line btn--success btn--counter">
					{ this.localeService.getLocalizedNameFor('subscribe') }
					<span>247</span>
				</div>
			</div>
		);
	}
}

export default SubscribeButtonComponent;


