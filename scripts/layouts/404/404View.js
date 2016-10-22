import React from 'react';

import BaseLayout from '../../components/baseLayout/baseLayout';

export default class View404 extends BaseLayout {
	render() {
		const { alias } = this.props.params;

		return (
			<div className="card card-main">
				<h1 className="e-404">404 <span>not found :/</span></h1>
				<div className="card-main-description">Company with alias or id <span>{ alias }</span> is not found.</div>
			</div>
		);
	}
}
