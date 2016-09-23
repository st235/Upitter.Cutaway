'use strict';

import React from 'react';
import BaseLayout from '../../../baseLayout/baseLayout';

class PostsNumberComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		let count = this.props.count || 0;

		return (
			<div className="content-header">
				<div className="content-header_item">{ this.localeService.getLocalizedNameFor('postsNumber') }<span>{ count }</span></div>
			</div>
		);
	}
}

export default PostsNumberComponent;


