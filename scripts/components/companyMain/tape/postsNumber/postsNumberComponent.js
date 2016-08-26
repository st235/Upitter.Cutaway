'use strict';

import React from 'react';
import BaseLayout from '../../../baseLayout/baseLayout';

class PostsNumberComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="content-header">
				<div className="content-header_item">Всего постов <span>42</span></div>
			</div>
		);
	}
}

export default PostsNumberComponent;


