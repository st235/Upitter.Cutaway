import React from 'react';

import BaseLayout from '../../components/baseLayout/baseLayout';

export default class View404 extends BaseLayout {
	render() {
		const { alias } = this.props.params;

		return (
			<div className="ui container">
				Company with alias or id { alias } is not found. Sorry :/
			</div>
		);
	}
}
