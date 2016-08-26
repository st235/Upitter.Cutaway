'use strict';

import React from 'react';

import BaseLayout from '../../../baseLayout/baseLayout';
import PostHeader from './postHeader/postHeader';
import PostContent from './postContent/postContentComponent';
import PostFooter from './postFooter/postFooterComponent';

class PostComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="post">
				<PostHeader />
				<PostContent />
				<PostFooter />
			</div>
		);
	}
}

export default PostComponent;


