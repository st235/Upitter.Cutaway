'use strict';

import React from 'react';
import BaseLayout from '../../../../../baseLayout/baseLayout';

class SiteComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { company } = this.store.getState();
		
		return (
			<div className="profile-name">{ company.name }</div>
		);
	}
}

export default SiteComponent;


