'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class LikeButton extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { likesAmount, likedByUser, onLike } = this.props;

		return (
			<div className="action-btn" onClick={ onLike }>
				<div className="action-icon action-icon--like"></div>
				<div className="counter">{ likesAmount }</div>
			</div>
		);
	}
}

export default LikeButton;


