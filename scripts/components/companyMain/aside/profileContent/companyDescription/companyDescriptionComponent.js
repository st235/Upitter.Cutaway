'use strict';

import React from 'react';
import BaseLayout from '../../../../baseLayout/baseLayout';

class DescriptionComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { company } = this.store.getState();

		return (
			<div className="profile-descript">
				{ company.description }
			</div>
		);
	}
}

export default DescriptionComponent;


