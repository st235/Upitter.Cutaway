'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class PostTitleComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { text } = this.props;
		
		return (
			<div className="post-content_text">
				{ text }
			</div>
		);
	}
}

export default PostTitleComponent;
