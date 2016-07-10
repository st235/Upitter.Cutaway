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
	}

	render() {
		console.log(this.props.params);
		return (
			<div className="ui container">
				company view content
			</div>
		);
	}
}
