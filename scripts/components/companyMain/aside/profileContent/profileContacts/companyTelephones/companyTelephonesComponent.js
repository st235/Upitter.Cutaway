'use strict';

import React from 'react';
import _ from 'underscore';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class CompanyTelephonesComponent extends BaseLayout {
	onBind() {
		this.generateCompanyPhones = this.generateCompanyPhones.bind(this);
	}

	generateCompanyPhones() {
		const { company } = this.store.getState();
		const telephones = company.contactPhones;

		if (!telephones || !telephones.length) return null;

		return _.map(telephones, (telephone, index) => <span key={ index }>{ telephone }</span>);
	}

	render() {
		return (
			<div className="profile-contacts_tel">
				{ this.generateCompanyPhones() }
			</div>
		);
	}
}

export default CompanyTelephonesComponent;
