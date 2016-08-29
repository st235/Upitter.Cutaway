'use strict';

import React from 'react';

import BaseLayout from '../../baseLayout/baseLayout';
import ProfileHeader from './profileHeader/profileHeaderComponent';
import ProfileContent from './profileContent/profileContentComponent';

import { ADD_COMPANY } from '../../../actions/companyActions';

import ErrorService from '../../../services/errorService';

class AsideComponent extends BaseLayout {
	componentDidMount() {
		const { alias } = this.props;

		this.request.getCompanyInfo(alias).then(result => {
			if (result && result.success && result.response) return this.store.dispatch(ADD_COMPANY(result.response));
			ErrorService.generateStandardError();
		});
	}

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
