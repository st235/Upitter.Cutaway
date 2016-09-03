'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';
import VotingVariantPreview from './votingVariantPreviewComponent';

class VotingPreviewComponent extends BaseLayout {
	onBind() {
		this.generatePreviewVariants = this.generatePreviewVariants.bind(this);
	}

	generatePreviewVariants() {
		const { variants, votersAmount } = this.props;
		return variants.map((variant, index) => <VotingVariantPreview key={ index } variant={ variant } votersAmount={ votersAmount } />);
	}

	render() {
		const { variants, votersAmount } = this.props;

		if (!variants) return null;
		return (
			<div className="polling">
				{ this.generatePreviewVariants() }
				<div className="polling_info">
					Всего проголосовало: <span>{ votersAmount }</span>
				</div>
			</div>
		);
	}
}

export default VotingPreviewComponent;
