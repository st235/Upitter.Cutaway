import React from 'react';

import BaseLayout from '../../components/baseLayout';
import CompanyInfo from '../../components/companyInfoComponent';

import { ADD_COMPANY } from '../../actions/companyActions';

import errorTypesConfig from '../../config/errorTypes';

import ErrorService from '../../services/errorService';

export default class LogView extends BaseLayout {
	constructor(props) {
		super(props);
		this.bind();
	}

	bind() {
		this.render = this.render.bind(this);
	}

	componentDidMount() {
		const { companyName } = this.props.params;

		this.request.getCompanyInfo(companyName).then(response => {
			console.log('Response: ', response);
		}).catch(err => {
			if (err) ErrorService.setError(errorTypesConfig.GET_COMPANY_INFO_ERROR, ErrorService.generateStandardError('ru'));
		});
	}

	render() {
		const { company } = this.store.getState();

		return (
			<div className="ui container">
				<CompanyInfo company={ company } />
			</div>
		);
	}
}
