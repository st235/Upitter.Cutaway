'use strict';

import React from 'react';

import BaseLayout from '../../baseLayout/baseLayout';
import markerStyles from './markerStyles';

class SubscribeButtonComponent extends BaseLayout {
	render() {
		const { styles, text } = this.props;
		// const style = Object.assign({}, markerStyles, styles);

		return (
			<div className="map-marker">
				<div style={ styles } className="map-marker-image"></div>
				<div className="map-marker-name">
					{ text }
				</div>
			</div>
		);
	}
}

export default SubscribeButtonComponent;
