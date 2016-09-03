'use strict';

import React from 'react';

import BaseLayout from '../../baseLayout/baseLayout';
import ProfileHeader from './profileHeader/profileHeaderComponent';
import ProfileContent from './profileContent/profileContentComponent';

class AsideComponent extends BaseLayout {
	render() {
		return (
			<aside className="side-left profile card">
				<ProfileHeader />
				<ProfileContent />
			</aside>
		);
	}
}

export default AsideComponent;
