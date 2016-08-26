'use strict';

import React from 'react';
import BaseLayout from '../baseLayout/baseLayout';
import PostsNumber from './postsNumber/postsNumberComponent';
import Post from './post/postComponent';

class TapeComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="side-right card">
				<PostsNumber />
				<div className="content-feed">
					<Post />
					<Post />
				</div>
			</div>
		);
	}
}

export default TapeComponent;
