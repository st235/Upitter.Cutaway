'use strict';

import React from 'react';
import BaseLayout from '../../baseLayout/baseLayout';

class SubscribeButtonComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="profile-follow">
				<div className="btn btn--line btn--success btn--counter">
					Подписаться
					<span>247</span>
				</div>
			</div>
		);
	}
}

export default SubscribeButtonComponent;


