'use strict';

import React from 'react';
import BaseLayout from '../../../../../baseLayout/baseLayout';

class OptionalMenuComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { isOpened, onShowOnMap, onReport, onShare, postId } = this.props;

		if (isOpened !== postId) return null;

		return (
			<div className="context-menu_items">
				<ul>
					<li onClick={ onShowOnMap.bind(this, postId) }><a>Показать на карте</a></li>
					<li onClick={ onReport.bind(this, postId) }><a>Пожаловаться</a></li>
					<li onClick={ onShare.bind(this, postId) }><a>Поделиться записью</a></li>
				</ul>
			</div>
		);
	}
}

export default OptionalMenuComponent;


