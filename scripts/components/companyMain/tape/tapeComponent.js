'use strict';

import React from 'react';

import BaseLayout from '../../baseLayout/baseLayout';
import PostsNumber from './postsNumber/postsNumberComponent';
import Post from './post/postComponent';

class TapeComponent extends BaseLayout {
	onBind() {
		this.generatePosts = this.generatePosts.bind(this);
	}

	onCreate() {

	}

	generatePosts() {
		const { posts } = this.store.getState();

		if (!posts.size) return null;

		return posts.map(post => {
			return <Post key={ post.get('customId') } post={ post } />;
		});
	}

	render() {
		const { postsCount } = this.store.getState();

		return (
			<div className="side-right card">
				<PostsNumber count={ postsCount } />
				<div className="content-feed" >
					{ this.generatePosts() }
				</div>
			</div>
		);
	}
}

export default TapeComponent;
