import React from 'react';

import BaseLayout from '../../components/baseLayout/baseLayout';

export default class View404 extends BaseLayout {
	render() {
		const { alias } = this.props.params;

		return (
			<div className="card card-main">
				<h1 className="e-404">404 <span>{ this.localeService.getLocalizedNameFor('notFound') } :/</span></h1>
				<div className="card-main-description">{ this.localeService.getLocalizedNameFor('companyWithAliasNotFound') } <span>{ alias }</span> { this.localeService.getLocalizedNameFor('companyNotFound') }.</div>
			</div>
		);
	}
}
