import React from 'react';

import BaseLayout from '../../../components/baseLayout/baseLayout';

export default class SuccessView extends BaseLayout {
	onBind() {
		this.getUserInfoAndRedirect = this.getUserInfoAndRedirect.bind(this);
	}

	getUserInfoAndRedirect() {

	}

	render() {
		const { alias } = this.props.params;

		return (
			<div className="ui container">
				Login successful
			</div>
		);
	}
}
