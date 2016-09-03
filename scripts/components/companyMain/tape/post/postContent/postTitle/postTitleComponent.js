'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class PostTitleComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { title } = this.props;

		return (
			<div className="post-content_title">
				{ title }
			</div>
		);
	}
}

export default PostTitleComponent;
