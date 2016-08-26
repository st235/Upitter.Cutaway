'use strict';

import React from 'react';
import BaseLayout from '../../baseLayout/baseLayout';

class ActivityListComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="profile-tags">
				<div className="profile-tags_title">Деятельность</div>
				<div className="profile-tags_wrapper">
					<div className="tag">Одежда</div>
					<div className="tag">Магазин одежды</div>
					<div className="tag">Магазин детской одежды</div>
					<div className="tag">Магазин спортивной одежды</div>
					<div className="tag">Спортивный магазин</div>
				</div>
			</div>
		);
	}
}

export default ActivityListComponent;
