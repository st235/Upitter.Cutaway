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
			'action-icon': true,
			'action-icon--like': true,
			'active': isLikedByMe
		});
	}

	render() {
		const { likesAmount, onLike } = this.props;
		const user = this.userService.getCurrentUser();
		const customId =  user ? user.customId : null;

		return (
			<div className="action-btn" onClick={ onLike.bind(this, customId) }>
				<div className={ this.generateClassNames() }></div>
				<div className="counter">{ likesAmount }</div>
			</div>
		);
	}
}

export default LikeButton;


