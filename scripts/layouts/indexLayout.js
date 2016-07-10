import React from 'react';

import BaseLayout from '../components/baseLayout';
import Loading from '../components/loadingComponent';

export default class IndexLayout extends BaseLayout {
	constructor(props) {
		super(props);
	}

	bind() {
		this.render = this.render.bind(this);
	}

	render() {
		const { children } = this.props;
		const { loading } = this.store.getState();

		return (
			<div>
				<Loading shouldBeShown={ loading.showLoading } />
				{ children }
			</div>
		);
	}
}
