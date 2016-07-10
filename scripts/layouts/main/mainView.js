import React from 'react';
import BaseLayout from '../../components/baseLayout';

export default class AuthorizationView extends BaseLayout {
	constructor(props) {
		super(props);

		this.bind();
	}

	bind() {
		this.render = this.render.bind(this);
	}

	render() {
		return (
			<div>
				Main view content!
			</div>
		);
	}
}
