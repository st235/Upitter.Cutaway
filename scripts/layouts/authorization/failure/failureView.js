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
		console.log(this.props);

		return (
			<div className="ui container">
				Login failed
			</div>
		);
	}
}