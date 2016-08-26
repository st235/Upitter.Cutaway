'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class LikeButton extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="action-btn">
				<div className="action-icon action-icon--like"></div>
				<div className="counter">12</div>
			</div>
		);
	}
}

export default LikeButton;


