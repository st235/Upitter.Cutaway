'use strict';

import React from 'react';

import BaseLayout from '../../../baseLayout/baseLayout';
import PostHeader from './postHeader/postHeader';
import PostContent from './postContent/postContentComponent';
import PostFooter from './postFooter/postFooterComponent';

import { TOGGLE_MENU_OPENED } from '../../../../actions/optionalMenuActions';
import { VOTE, LIKE, ADD_TO_FAVORITES } from '../../../../actions/postsActions';
import { OPEN_SHOW_ON_MAP } from '../../../../actions/showOnMapActions';

class PostComponent extends BaseLayout {
	onBind() {

	}

	onMenuOpened(postId, e) {
		e.stopPropagation();

		const { optionalMenu } = this.store.getState();

		if (!optionalMenu) return this.store.dispatch(TOGGLE_MENU_OPENED(postId));
		if (optionalMenu === postId) return this.store.dispatch(TOGGLE_MENU_OPENED());
		if (optionalMenu !== postId) return this.store.dispatch(TOGGLE_MENU_OPENED(postId));
	}

	onShowPostOnMap(post) {
		const coordinates = post.get('coordinates');
		const text = post.get('title');

		this.store.dispatch(OPEN_SHOW_ON_MAP(
			coordinates.latitude,
			coordinates.longitude,
			null,
			text
		));
	}

	onReport(postId) {
		console.log('onReport: ', postId);
	}

	onShare(postId) {
		console.log('onReport: ', postId);
	}

	onVote(postId, variantIndex, userId) {
		this.request.vote(postId, variantIndex).then(() => {
			this.store.dispatch(VOTE(postId, variantIndex, userId));
		});
	}

	onImageClicked(postId, image) {

	}

	onAddToFavorites(postId, userId) {
		this.request.addToFavorites(postId).then(() => {
			this.store.dispatch(ADD_TO_FAVORITES(postId, userId));
		});
	}

	onLike(postId, userId) {
		this.request.like(postId).then(() => {
			this.store.dispatch(LIKE(postId, userId));
		});
	}

	onShowComments(commentsAmmout) {
		console.log(`showComments ${commentsAmmout}`);
	}

	render() {
		const post = this.props.post;
		if (!post) return null;

		return (
			<div className="post">
				<PostHeader
					post={ post }
					onMenuOpened={ this.onMenuOpened }
					onShowOnMap={ this.onShowPostOnMap }
					onReport={ this.onReport }
					onShare={ this.onShare }
				/>
				<PostContent
					post={ post }
					onVote={ this.onVote.bind(this, post.get('customId')) }
					onImageClicked={ this.onImageClicked.bind(this, post.get('customId')) }
				/>
				<PostFooter
					post={ post }
					onShowComments={ this.onShowComments }
					onLike={ this.onLike.bind(this, post.get('customId')) }
					onAddToFavorites={ this.onAddToFavorites.bind(this, post.get('customId')) }
				/>
			</div>
		);
	}
}

export default PostComponent;


