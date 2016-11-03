'use strict';

import React from 'react';
import cn from 'classnames';

import BaseLayout from '../../../../baseLayout/baseLayout';

import { SUBSCRIBE_TO_COMPANY } from '../../../../../actions/companyActions';

class SubscribeButtonComponent extends BaseLayout {
	onBind() {
		this.onToggleSubscriptionSubscribe = this.onToggleSubscriptionSubscribe.bind(this);
	}

	onCreate() {

	}

	onToggleSubscriptionSubscribe(customId) {
		return e => {
			this.request.subscribe(customId).then(() => {
				this.store.dispatch(SUBSCRIBE_TO_COMPANY());
			});
		};
	}

	render() {
		const { company } = this.store.getState();
		const { subscribersAmount, isMySubscription, customId } = company;
		const classNames = cn({
			'btn': true,
			'btn--line': true,
			'btn--success': true,
			'btn--counter': true,
			'is-active': isMySubscription
		});

		return (
			//TODO: Что делать, если подписан?
			<div className="profile-follow">
				<div className={ classNames } onClick={ this.onToggleSubscriptionSubscribe(customId) }>
					{ isMySubscription
						?
						this.localeService.getLocalizedNameFor('unsubscribe')
						:
						this.localeService.getLocalizedNameFor('subscribe') }
					<span>{ subscribersAmount }</span>
				</div>
			</div>
		);
	}
}

export default SubscribeButtonComponent;


