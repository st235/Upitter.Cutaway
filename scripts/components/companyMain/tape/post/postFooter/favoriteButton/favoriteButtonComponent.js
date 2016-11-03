'use strict';

import React from 'react';
import cn from 'classnames';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class FavoriteButton extends BaseLayout {
	onBind() {
		this.generateClassNames = this.generateClassNames.bind(this);
	}

	generateClassNames() {
		const { isFavoriteByMe } = this.props;

		return cn({
			'action-btn': true,
			'is-active': isFavoriteByMe
		});
	}

	render() {
		const { onAddToFavorites } = this.props;
		const user = this.userService.getCurrentUser();
		const customId =  user ? user.customId : null;

		return (
			<div className={ this.generateClassNames() } onClick={ onAddToFavorites.bind(this, customId) }>
				<div className="action-icon action-icon--favorit"></div>
			</div>
		);
	}
}

export default FavoriteButton;


