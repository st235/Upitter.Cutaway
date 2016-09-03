'use strict';

import React from 'react';
import _ from 'underscore';

import BaseLayout from '../../../../../baseLayout/baseLayout';
import VotingPreview from './votingPreviewComponent';
import VotingVariant from './votingVariantComponent';

class VotingComponent extends BaseLayout {
	onBind() {
		this.generateVariants = this.generateVariants.bind(this);
	}

	generateVariants() {
		const { variants, onVote } = this.props;
		return variants.map((variant, index) => <VotingVariant key={ index } variant={ variant } onVote={ onVote } />);
	}

	render() {
		const { variants, votersAmount, isVotedByMe } = this.props;

		if (!variants) return null;

		if (!isVotedByMe) {
			return (
				<div className="polling">
					{ this.generateVariants() }
					<div className="polling_info">
						Всего проголосовало: <span>{ votersAmount }</span>
					</div>
				</div>
			);
		}

		return <VotingPreview variants={ variants } votersAmount={ votersAmount } />;
	}
}

export default VotingComponent;
