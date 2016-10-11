'use strict';

import React from 'react';
import cn from 'classnames';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class PostContentComponent extends BaseLayout {
	onBind() {
		this.generateStyles = this.generateStyles.bind(this);
		this.generateClasses = this.generateClasses.bind(this);
	}

	generateStyles() {
		const { variant, votersAmount } = this.props;

		const result = {
			width: `${Math.round((variant.count / votersAmount) * 100)}%`
		};
		return result;
	}

	generateClasses() {
		const { variant } = this.props;
		const { customId } = this.userService.getCurrentUser();
		let votedByMe = false;

		variant.voters.forEach(voter => {
			if (voter === customId) votedByMe = true;
		});

		return cn({
			'polling_item-line': true,
			'polling_item--active': votedByMe
		});
	}

	render() {
		const { variant } = this.props;

		return (
			<div className="polling_item">
				<div className="polling_item-title">{ variant.value }</div>
				<div className="polling_item-counter">{ variant.count }</div>
				<div className={ this.generateClasses() } style={ this.generateStyles() }></div>
			</div>
		);
	}
}

export default PostContentComponent;


