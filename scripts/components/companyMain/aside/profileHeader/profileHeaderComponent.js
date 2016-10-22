'use strict';

import React from 'react';
import BaseLayout from '../../../baseLayout/baseLayout';

class ProfileHeaderComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { company } = this.store.getState();
		const styles = {
			backgroundImage: `url("${company.logoUrl}")`
		};
		return (
			<div className="profile-header">
				<div className="profile-header_bg">
					<div className="profile-background" style={ styles }></div>
				</div>
				<div className="profile-header_ava"><img src={ company.logoUrl } alt="ava" /></div>
			</div>
		);
	}
}

export default ProfileHeaderComponent;
