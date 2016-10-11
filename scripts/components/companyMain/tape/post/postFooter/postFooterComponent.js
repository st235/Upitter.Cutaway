'use strict';

import React from 'react';

import BaseLayout from '../../../../baseLayout/baseLayout';
import PostCategory from './postCategory/postCategoryComponent';
import CommentsButton from './commentsButton/commentsButtonComponent';
import FavoriteButton from './favoriteButton/favoriteButtonComponent';
import LikeButton from './likeButton/likeButtonComponent';

class PostFooterComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { post, onShowComments, onLike } = this.props;

		return (
			<div className="post-footer">
				<PostCategory category={ post.get('category') } />
				<div className="post-menu">
					<div className="post-menu_item">
						<FavoriteButton />
					</div>
					<div className="post-menu_item">
						<CommentsButton commentsAmount={ post.get('commentsAmount') } onShowComments={ onShowComments } />
					</div>
					<div className="post-menu_item">
						<LikeButton likesAmount={ post.get('likesAmount') } isLikedByMe={ post.get('isLikedByMe') } onLike={ onLike } />
					</div>
				</div>
			</div>
		);
	}
}

export default PostFooterComponent;

