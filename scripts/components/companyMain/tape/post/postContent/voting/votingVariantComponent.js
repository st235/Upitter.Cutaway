'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class PostContentComponent extends BaseLayout {
	render() {
		const { variant, variantIndex, onVote } = this.props;
		const user = this.userService.getCurrentUser();

		if (!user) {
			return (
				<div className="polling_item polling_item--btn">
					<div className="polling_item-title">{ variant.value }</div>
				</div>
			);
		}

		return (
			<div onClick={ onVote.bind(this, variantIndex, user.customId) } className="polling_item polling_item--btn">
				<div className="polling_item-title">{ variant.value }</div>
			</div>
		);
	}
}

export default PostContentComponent;


