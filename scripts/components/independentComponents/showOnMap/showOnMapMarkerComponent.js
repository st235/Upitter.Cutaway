'use strict';

import React from 'react';

import BaseLayout from '../../baseLayout/baseLayout';

class SubscribeButtonComponent extends BaseLayout {
	render() {
		console.log(this.props);
		const { styles } = this.props;
		return (
			<div style={ styles }></div>
		);
	}
}

export default SubscribeButtonComponent;


