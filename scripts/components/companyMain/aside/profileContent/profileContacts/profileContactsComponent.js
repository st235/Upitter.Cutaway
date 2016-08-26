'use strict';

import React from 'react';

import BaseLayout from '../../../../baseLayout/baseLayout';
import CompanyTelephones from './companyTelephones/companyTelephonesComponent';
import CompanySite from './companySite/companySiteComponent';
import CompanySocialIcons from './companySocialIcons/companySocialIconsComponent';

class ProfileContactsComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="profile-contacts">
				<CompanyTelephones />
				<CompanySite />
				<CompanySocialIcons />
			</div>
		);
	}
}

export default ProfileContactsComponent;


