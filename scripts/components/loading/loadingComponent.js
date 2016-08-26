'use strict';

import React from 'react';
import BaseLayout from '../baseLayout/baseLayout';

class LoadingComponent extends BaseLayout {
	render() {
		const { shouldBeShown } = this.props;

		if (shouldBeShown) {
			return (
				<div className="ui active dimmer">
					<div className="ui indeterminate text loader"> Preparing  Information</div>
				</div>
			);
		}

		return <div />;
	}
}

LoadingComponent.propTypes = {
	shouldBeShown: React.PropTypes.bool
};

export default LoadingComponent;
