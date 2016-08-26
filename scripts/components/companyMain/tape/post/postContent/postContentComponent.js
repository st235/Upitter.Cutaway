'use strict';

import React from 'react';

import BaseLayout from '../../../../baseLayout/baseLayout';
import PostTitle from './postTitle/postTitleComponent';
import PostText from './postText/postTextComponent';
import Gallery from './postGallery/postGalleryComponent';

class PostContentComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="post-content">
				<PostTitle />
				<PostText />
				<Gallery />
			</div>
		);
	}
}

export default PostContentComponent;


