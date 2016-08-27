'use strict';

import React from 'react';

import BaseLayout from '../../../baseLayout/baseLayout';
import SubscribeButton from './subscribeButton/subscribeButtonComponent';
import CompanyDescription from './companyDescription/companyDescriptionComponent';
import ProfileContacts from './profileContacts/profileContactsComponent';
import ShowOnMapButton from './showOnMapButton/showOnMapButtonComponent';
import ActivityList from './activityList/activityListComponent';

class ProfileContent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="profile-content">
				<SubscribeButton />
				<CompanyDescription />
				<ProfileContacts />
				<ShowOnMapButton />
				<ActivityList />
			</div>
		);
	}
}

export default ProfileContent;
