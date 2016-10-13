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
			'action-icon': true,
			'action-icon--favorit': true,
			'active': isFavoriteByMe
		});
	}

	render() {
		const { favoritesAmount, onAddToFavorites } = this.props;
		const user = this.userService.getCurrentUser();
		const customId =  user ? user.customId : null;

		return (
			<div className="action-btn" onClick={ onAddToFavorites.bind(this, customId) }>
				<div className={ this.generateClassNames() }></div>
			</div>
		);
	}
}

export default FavoriteButton;


