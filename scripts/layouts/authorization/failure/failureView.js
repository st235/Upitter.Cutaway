import React from 'react';

import BaseLayout from '../../../components/baseLayout/baseLayout';

export default class FailureView extends BaseLayout {
	onBind() {
		this.getUserInfoAndRedirect = this.getUserInfoAndRedirect.bind(this);
	}

	getUserInfoAndRedirect() {

	}

	render() {
		const { alias } = this.props.params;

		return (
			<div className="card card-main">
				<div className="card-main-description">
					<span className="c-danger">Login failed</span>
				</div>
			</div>
		);
	}
}
