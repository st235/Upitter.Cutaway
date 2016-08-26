'use strict';

import React from 'react';
import BaseLayout from '../../baseLayout/baseLayout';

class CompanyNameComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const styles = {
			backgroundImage: 'url("./images/logo_company.png")'
		};
		return (
			<div className="profile-header">
				<div className="profile-header_bg" style={ styles }></div>
				<div className="profile-header_ava"><img src="/images/logo_company.png" alt="ava" /></div>
			</div>
		);
	}
}

export default CompanyNameComponent;
