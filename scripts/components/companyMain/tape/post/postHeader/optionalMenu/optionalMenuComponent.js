'use strict';

import React from 'react';
import BaseLayout from '../../../../../baseLayout/baseLayout';

class OptionalMenuComponent extends BaseLayout {
	render() {
		const { isOpened, onShowOnMap, onReport, onShare, postId, post } = this.props;

		if (isOpened !== postId) return null;

		return (
			<div className="context-menu_items">
				<ul>
					<li onClick={ onShowOnMap.bind(this, post) }><a>Показать на карте</a></li>
					<li onClick={ onReport.bind(this, post) }><a>Пожаловаться</a></li>
				</ul>
			</div>
		);
	}
}

export default OptionalMenuComponent;

// <li onClick={ onShare.bind(this, postId) }><a>Поделиться записью</a></li>