'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class PostContentComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { variant, onVote } = this.props;

		return (
			<div onClick={ onVote.bind(this, variant) } className="polling_item polling_item--btn">
				<div className="polling_item-title">{ variant.get('value') }</div>
			</div>
		);
	}
}

export default PostContentComponent;


