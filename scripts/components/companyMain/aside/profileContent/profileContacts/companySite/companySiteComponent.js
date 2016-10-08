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
			<div className="profile-contacts_site" ><a href={ `http://${company.site}` }>{ company.site }</a></div>
		);
	}
}

export default SiteComponent;


