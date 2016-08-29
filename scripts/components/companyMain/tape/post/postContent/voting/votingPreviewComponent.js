'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class VotingPreviewComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="polling">
				<div className="polling_item">
					<div className="polling_item-title">asdaasdfasd fasdf sdas</div>
					<div className="polling_item-counter">235</div>
					<div className="polling_item-line" style="width: 45%;"></div>
				</div>
				<div className="polling_item polling_item--active">
					<div className="polling_item-title">asdasasdfasd afsdfasdf asddas</div>
					<div className="polling_item-counter">111</div>
					<div className="polling_item-line" style="width: 25%;"></div>
				</div>
				<div className="polling_item">
					<div className="polling_item-title">asdaasdfa sdfasdf asdfa sdfasdasdfas dfafa sdfaaasdf asdfa dsfasdf adsfa sdfasd fassdas</div>
					<div className="polling_item-counter">123</div>
					<div className="polling_item-line" style="width: 30%;"></div>
				</div>
				<div className="polling_info">
					Всего проголосовало: <span>777</span>
				</div>
			</div>
		);
	}
}

export default VotingPreviewComponent;
