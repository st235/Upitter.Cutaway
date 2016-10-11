'use strict';

import React from 'react';

import BaseLayout from '../../../baseLayout/baseLayout';
import PostHeader from './postHeader/postHeader';
import PostContent from './postContent/postContentComponent';
import PostFooter from './postFooter/postFooterComponent';

import { TOGGLE_MENU_OPENED } from '../../../../actions/optionalMenuActions';
import { VOTE } from '../../../../actions/postsActions';

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

	onShowPostOnMap(postId) {
		console.log('showPostOnMap: ', postId);
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

	onAddToFavorites() {

	}

	onLike() {

	}

	onShowComments(commentsAmmout) {
		console.log('showComments');
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
					onLike={ this.onLike }
				/>
			</div>
		);
	}
}

export default PostComponent;


