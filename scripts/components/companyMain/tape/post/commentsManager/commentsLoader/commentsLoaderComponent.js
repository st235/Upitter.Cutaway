'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class CommentLoaderComponent extends BaseLayout {
	onBind() {

	}

	render() {
		const { onLoadMore, commentsAmount, currentCommentsAmount, lastCommentId } = this.props;

		console.log(commentsAmount);
		console.log(currentCommentsAmount);
		if (commentsAmount === currentCommentsAmount) return null;

		return (
			<div className="comments-loader" onClick={ onLoadMore(lastCommentId) }>
				Загрузить еще { commentsAmount - currentCommentsAmount } комментариев
			</div>
		);
	}
}

export default CommentLoaderComponent;


