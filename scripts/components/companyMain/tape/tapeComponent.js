'use strict';

import React from 'react';
import ReduxInfiniteScroll from 'redux-infinite-scroll';
import { Map } from 'immutable';

import BaseLayout from '../../baseLayout/baseLayout';
import PostsNumber from './postsNumber/postsNumberComponent';
import Post from './post/postComponent';

import { ADD_POSTS } from '../../../actions/postsActions';
import { SET_POSTS_COUNT } from '../../../actions/postsCountActions';

class TapeComponent extends BaseLayout {
	onBind() {
		this.generatePosts = this.generatePosts.bind(this);
		this.loadMore = this.loadMore.bind(this);
	}

	componentWillMount() {
		this.lastPostId = null;
		this.invoked = false;
	}

	generatePosts() {
		let { posts } = this.store.getState();

		posts = posts.toArray().sort((first, second) => new Date(first.createdDate) < new Date(second.createdDate));

		if (!posts.length) return [];
		return posts.map(post => <Post key={ post.customId } post={ new Map(post) } />);
	}

	loadMore() {
		const { company } = this.store.getState();
		const alias = company.alias;

		this.invoked = true;

		this.request.getPosts(alias, this.lastPostId).then(result => {
			this.invoked = false;
			if (result && result.success && result.response && result.response.count) {
				let posts = result.response.posts;

				if (posts || posts.length) {
					this.lastPostId = posts[posts.length - 1].customId;
				}

				this.store.dispatch(ADD_POSTS(posts));
				this.store.dispatch(SET_POSTS_COUNT(result.response.count));
			}
		}).catch(() => {
			this.invoked = false;
		});
	}

	render() {
		const { postsCount, posts, company } = this.store.getState();

		if (!company || !company.alias) return null;

		let hasMore = false;

		if (posts.size < postsCount) hasMore = true;
		if (this.invoked) hasMore = false;

		return (
			<div className="side-right card">
				<PostsNumber count={ postsCount } />
				<div className="content-feed" >
					<ReduxInfiniteScroll
						threshold={ 10 }
						elementIsScrollable={ false }
						items={ this.generatePosts() }
						loadMore={ this.loadMore }
						hasMore={ hasMore }
						showLoader={ false }
						loadingMore={ this.invoked }
						holder={"div"}
					/>
				</div>
			</div>
		);
	}
}

export default TapeComponent;
