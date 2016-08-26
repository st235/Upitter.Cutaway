'use strict';

import React from 'react';
import BaseLayout from '../baseLayout/baseLayout';
import ProfileHeader from './profileHeader/profileHeaderComponent';
import CompanyName from './companyName/companyNameComponent';
import SubscribeButton from './subscribeButton/subscribeButtonComponent';
import CompanyDescription from './companyDescription/companyDescriptionComponent';
import CompanyTelephones from './companyTelephones/companyTelephonesComponent';
import CompanySite from './companySite/companySiteComponent';
import CompanySocialIcons from './companySocialIcons/companySocialIconsComponent';
import ShowOnMapButton from './showOnMapButton/showOnMapButtonComponent';
import ActivityList from './activityList/activityListComponent';

class AsideComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<aside className="side-left profile card">
				<ProfileHeader />
				<div className="profile-content">
					<CompanyName />
					<SubscribeButton />
					<CompanyDescription />
					<div className="profile-contacts">
						<CompanyTelephones />
						<CompanySite />
						<CompanySocialIcons />
					</div>
					<ShowOnMapButton />
					<ActivityList />
				</div>
			</aside>
		);
	}
}

export default AsideComponent;


