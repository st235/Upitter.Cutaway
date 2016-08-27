import React from 'react';

import BaseLayout from '../../components/baseLayout/baseLayout';
import Header from '../../components/header/headerComponent';
import CompanyMain from '../../components/companyMain/companyMainComponent';
import Aside from '../../components/companyMain/aside/asideComponent';
import Tape from '../../components/companyMain/tape/tapeComponent';
import Footer from '../../components/footer/footerComponent';

import { ADD_COMPANY } from '../../actions/companyActions';

import errorTypesConfig from '../../config/errorTypes';

import ErrorService from '../../services/errorService';

export default class LogView extends BaseLayout {
	componentDidMount() {
		const { alias } = this.props.params;

		this.request.getCompanyInfo(alias).then(response => {
			if (response && response.success)
			console.log('Response: ', response);
		}).catch(err => {
			if (err) ErrorService.setError(errorTypesConfig.GET_COMPANY_INFO_ERROR, ErrorService.generateStandardError('ru'));
		});
	}

	render() {
		const { company } = this.store.getState();

		return (
			<div>
				<Header />
				<CompanyMain>
					<Aside />
					<Tape />
				</CompanyMain>
				<Footer />
			</div>
		);
	}
}
