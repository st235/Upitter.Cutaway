'use strict';

import React from 'react';

import BaseLayout from '../../baseLayout/baseLayout';
import markerStyles from './markerStyles';

class SubscribeButtonComponent extends BaseLayout {
	render() {
		const { styles, text } = this.props;
		const style = Object.assign({}, markerStyles, styles);

		return (
			<div style={ style }>
				<div className="company-marker-name">
					{ text }
				</div>
			</div>
		);
	}
}

export default SubscribeButtonComponent;


