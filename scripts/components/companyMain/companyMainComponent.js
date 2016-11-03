'use strict';

import React from 'react';
import BaseLayout from '../baseLayout/baseLayout';

import { ADD_COMPANY, UPDATE_COMPANY_CATEGORIES } from '../../actions/companyActions';

import LocationService from '../../services/locationService';

class CompanyMainComponent extends BaseLayout {
	componentDidMount() {
		const { alias } = this.props;

		this.request.getCompanyInfo(alias).then(result => {
			if (result && result.success && result.response) {
				this.store.dispatch(ADD_COMPANY(result.response));
				return result.response.activity;
			}
			LocationService.goTo404(alias);
		}).then(activity => {
			if (activity && activity.length) {
				return this.request.getCategoryNames(activity).then(result => {
					if (result && result.success && result.response) {
						this.store.dispatch(UPDATE_COMPANY_CATEGORIES(result.response));
					}
				});
			}
		}).then(() => {
			return this.request.getReportReasons().then(result => {
				if (result.success) {
					this.reportsService.init(result.response);
				}
			});
		});
	}

	render() {
		const { children } = this.props;
		
		return (
			<main className="main">
				<div className="container">
					<div className="content content--side-left">{ children }</div>
				</div>
			</main>
		);
	}
}

export default CompanyMainComponent;


