'use strict';

import React from 'react';
import BaseLayout from '../../../../baseLayout/baseLayout';

class SubscribeButtonComponent extends BaseLayout {
	onBind() {
		this.onSubscribe = this.onSubscribe.bind(this);
	}

	onCreate() {

	}

	onSubscribe(customId) {
		return e => {
			console.log(customId);
		};
	}

	render() {
		const { company } = this.store.getState();
		const { subscribersAmount, isMySubscription, customId } = company;

		return (
			//TODO: Что делать, если подписан?
			<div className="profile-follow">
				<div className="btn btn--line btn--success btn--counter" onClick={ this.onSubscribe(customId) }>
					{ this.localeService.getLocalizedNameFor('subscribe') }
					<span>{ subscribersAmount }</span>
				</div>
			</div>
		);
	}
}

export default SubscribeButtonComponent;


