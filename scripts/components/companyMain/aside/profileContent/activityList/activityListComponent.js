'use strict';

import React from 'react';
import _ from 'underscore';

import BaseLayout from '../../../../baseLayout/baseLayout';

class ActivityListComponent extends BaseLayout {
	onBind() {
		this.generateCategoriesList = this.generateCategoriesList.bind(this);
	}

	generateCategoriesList() {
		const { company } = this.store.getState();
		if (!company || !company.activity) return null;

		return _.map(company.activity, (activity, index) => <div key={ index } className="tag">{ activity.title }</div>);
	}

	render() {
		return (
			<div className="profile-tags">
				<div className="profile-tags_title">Деятельность</div>
				<div className="profile-tags_wrapper">
					{ this.generateCategoriesList() }
				</div>
			</div>
		);
	}
}

export default ActivityListComponent;
