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
		return (
			<div className="post-footer">
				<PostCategory />
				<div className="post-menu">
					<div className="post-menu_item">
						<FavoriteButton />
					</div>
					<div className="post-menu_item">
						<CommentsButton />
					</div>
					<div className="post-menu_item">
						<LikeButton />
					</div>
				</div>
			</div>
		);
	}
}

export default PostFooterComponent;

