import React from 'react';

import BaseLayout from '../../components/baseLayout';

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
			console.log(response);
		}).catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<div className="ui container">
				company view content
			</div>
		);
	}
}
