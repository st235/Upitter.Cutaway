'use strict';

import React from 'react';

import BaseLayout from '../../../baseLayout/baseLayout';
import PostHeader from './postHeader/postHeader';
import PostContent from './postContent/postContentComponent';
import PostFooter from './postFooter/postFooterComponent';
import CommentsManager from './commentsManager/commentsManagerComponent';

import { TOGGLE_MENU_OPENED } from '../../../../actions/optionalMenuActions';
import { VOTE, LIKE, ADD_TO_FAVORITES, TOGGLE_COMMENTS, INCREMENT_COMMENTS_AMOUNT } from '../../../../actions/postsActions';
import { OPEN_SHOW_ON_MAP } from '../../../../actions/showOnMapActions';
import { TOGGLE_REPORT_DIALOG } from '../../../../actions/reportsActions';
import { ADD_NEW_COMMENT } from '../../../../actions/commentsActions';

class PostComponent extends BaseLayout {
	onMenuOpened(postId, e) {
		e.stopPropagation();

		const { optionalMenu } = this.store.getState();

		if (!optionalMenu) return this.store.dispatch(TOGGLE_MENU_OPENED(postId));
		if (optionalMenu === postId) return this.store.dispatch(TOGGLE_MENU_OPENED());
		if (optionalMenu !== postId) return this.store.dispatch(TOGGLE_MENU_OPENED(postId));
	}

	onShowPostOnMap(post) {
		const { company } = this.store.getState();
		const coordinates = post.get('coordinates');
		const text = post.get('title');

		this.store.dispatch(OPEN_SHOW_ON_MAP(
			coordinates.latitude,
			coordinates.longitude,
			company.logoUrl,
			text
		));
	}

	onReport(post) {
		this.store.dispatch(TOGGLE_REPORT_DIALOG(post));
	}

	onShare(postId) {
		console.log('onReport: ', postId);
	}

	onVote(postId, variantIndex, userId) {
		this.request.vote(postId, variantIndex).then(() => {
			this.store.dispatch(VOTE(postId, variantIndex, userId));
		});
	}

	onAddToFavorites(postId, userId) {
		this.request.addToFavorites(postId).then(() => {
			this.store.dispatch(ADD_TO_FAVORITES(postId, userId));
		});
	}

	onImageClicked(postId) {
		console.log(postId);
	}

	onLike(postId, userId) {
		this.request.like(postId).then(() => {
			this.store.dispatch(LIKE(postId, userId));
		});
	}

	onPublishComment(postId, text) {
		return this.request.comment(postId, text).then(result => {
			if (result.success) {
				this.store.dispatch(ADD_NEW_COMMENT(postId, result.response));
				this.store.dispatch(INCREMENT_COMMENTS_AMOUNT(postId));
			}
		});
	}

	onShowComments(postId) {
		this.store.dispatch(TOGGLE_COMMENTS(postId));
	}

	onLoadMoreComments(postId, commentId) {

	}

	render() {
		const post = this.props.post;
		const postId = post.get('customId');
		const { comments } = this.store.getState();
		const currentPostComments = comments.get(postId);

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
					onVote={ this.onVote.bind(this, postId) }
					onImageClicked={ this.onImageClicked.bind(this, postId) }
				/>
				<PostFooter
					post={ post }
					onShowComments={ this.onShowComments.bind(this, postId) }
					onLike={ this.onLike.bind(this, postId) }
					onAddToFavorites={ this.onAddToFavorites.bind(this, postId) }
				/>

				<CommentsManager
					showComments={ post.get('showComments') }
					comments={ currentPostComments }
					commentsAmount={ post.get('commentsAmount') }
					onPublishComment={ this.onPublishComment.bind(this, postId.toString()) }
					onLoadMore={ this.onLoadMoreComments.bind(this, postId) }
				/>
			</div>
		);
	}
}

export default PostComponent;


