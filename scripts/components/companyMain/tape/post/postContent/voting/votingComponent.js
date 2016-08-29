'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';
import VotingPreview from './votingPreviewComponent';

class VotingComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="polling">
				<div className="polling_item polling_item--btn">
					<div className="polling_item-title">asdaasdfasd fasdf sdas</div>
				</div>
				<div className="polling_item polling_item--btn">
					<div className="polling_item-title">asdasasdfasd afsdfasdf asddas</div>
				</div>
				<div className="polling_item polling_item--btn">
					<div className="polling_item-title">asdaasdfa sdfasdf asdfa sdfasdasdfas dfafa sdfaaasdf asdfa dsfasdf adsfa sdfasd fassdas</div>
				</div>
				<div className="polling_info">
					Всего проголосовало: <span>777</span>
				</div>
			</div>
		);
	}
}

export default VotingComponent;
