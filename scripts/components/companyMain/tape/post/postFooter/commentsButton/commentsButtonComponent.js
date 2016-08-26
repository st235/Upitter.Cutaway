'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class PostHeaderComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="action-btn">
				<div className="action-icon action-icon--comment"></div>
				<div className="counter">5</div>
			</div>
		);
	}
}

export default PostHeaderComponent;


