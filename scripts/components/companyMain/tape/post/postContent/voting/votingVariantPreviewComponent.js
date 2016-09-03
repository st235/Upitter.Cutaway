'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class PostContentComponent extends BaseLayout {
	onBind() {
		this.generateStyles = this.generateStyles.bind(this);
	}

	generateStyles() {
		const { variant, votersAmount } = this.props;
		const count = variant.get('count');

		return {
			width: `${Math.round(count / votersAmount)}%`
		};
	}

	render() {
		const { variant } = this.props;

		return (
			<div className="polling_item">
				<div className="polling_item-title">{ variant.get('value') }</div>
				<div className="polling_item-counter">{ variant.get('count') }</div>
				<div className="polling_item-line" style={ this.generateStyles() }></div>
			</div>
		);
	}
}

export default PostContentComponent;


