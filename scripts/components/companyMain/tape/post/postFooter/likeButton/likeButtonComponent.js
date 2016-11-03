'use strict';

import React from 'react';
import cn from 'classnames';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class LikeButton extends BaseLayout {
	onBind() {
		this.generateClassNames = this.generateClassNames.bind(this);
	}

	generateClassNames() {
		const { isLikedByMe } = this.props;

		return cn({
			'action-btn': true,
			'is-active': isLikedByMe
		});
	}

	render() {
		const { likesAmount, onLike } = this.props;
		const user = this.userService.getCurrentUser();
		const customId =  user ? user.customId : null;

		return (
			<div className={ this.generateClassNames() } onClick={ onLike.bind(this, customId) }>
				<div className="action-icon action-icon--like"></div>
				<div className="counter">{ likesAmount }</div>
			</div>
		);
	}
}

export default LikeButton;


