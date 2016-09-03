'use strict';

import React from 'react';
import BaseLayout from '../baseLayout/baseLayout';

import { ADD_COMPANY, UPDATE_COMPANY_CATEGORIES } from '../../actions/companyActions';
import { ADD_POSTS } from '../../actions/postsActions';
import { SET_POSTS_COUNT } from '../../actions/postsCountActions';

import ErrorService from '../../services/errorService';

class CompanyMainComponent extends BaseLayout {
	componentDidMount() {
		const { alias } = this.props;

		this.request.getCompanyInfo(alias).then(result => {
			if (result && result.success && result.response) {
				this.store.dispatch(ADD_COMPANY(result.response));
				return result.response.activity;
			}
			ErrorService.generateStandardError();
		}).then(activity => {
			if (activity && activity.length) {
				return this.request.getCategoryNames(activity).then(result => {
					if (result && result.success && result.response) {
						this.store.dispatch(UPDATE_COMPANY_CATEGORIES(result.response));
					}
				});
			}
		}).then(() => {
			this.request.getPosts(alias).then(result => {
				if (result && result.success && result.response && result.response.count) {
					this.store.dispatch(ADD_POSTS(result.response.posts));
					this.store.dispatch(SET_POSTS_COUNT(result.response.count));
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


