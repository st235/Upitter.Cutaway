import React from 'react';

import BaseLayout from '../../../components/baseLayout/baseLayout';

export default class SuccessView extends BaseLayout {
	onBind() {
		this.getUserInfoAndRedirect = this.getUserInfoAndRedirect.bind(this);
		this.getAccessToken = this.getAccessToken.bind(this);
	}

	componentDidMount() {
		this.getUserInfoAndRedirect();
	}

	getAccessToken() {
		const query = this.props.location.query;
		return (query && query.accessToken) ? query.accessToken : null;
	}

	getUserInfoAndRedirect() {
		const accessToken = this.getAccessToken();
		if (!accessToken) this.locationService.goToFailureCallback();

		this.request.getProfile(accessToken).then(result => {
			if (!result.success) this.locationService.goToFailureCallback();
			this.userService.setAccessToken(accessToken);
			this.userService.setCurrentUser(result.response);
			this.locationService.hasPreviousPath() ? this.locationService.goToCompany() : this.locationService.goToMain();
		});
	}

	render() {
		return (
			<div className="card card-main">
				<div className="card-main-description">
					<span className="c-success">Login successful</span>
				</div>
			</div>
		);
	}
}
