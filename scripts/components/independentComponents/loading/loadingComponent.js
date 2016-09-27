'use strict';

import React from 'react';
import BaseLayout from '../../baseLayout/baseLayout';

class LoadingComponent extends BaseLayout {
	render() {
		const { shouldBeShown } = this.props;

		if (shouldBeShown) {
			return (
				<div className="notify-fixed-wrapper">
					<div className="container">
						<div className="notify-toast preloader">
							Загрузка...
						</div>
					</div>
				</div>
			);
		}

		return null;
	}
}

// LoadingComponent.propTypes = {
// 	shouldBeShown: React.PropTypes.bool
// };

export default LoadingComponent;
