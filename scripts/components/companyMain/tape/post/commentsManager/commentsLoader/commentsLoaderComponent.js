'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class CommentLoaderComponent extends BaseLayout {
	render() {
		const { onLoadMore, commentsAmount, currentCommentsAmount, lastCommentId } = this.props;

		if (commentsAmount === currentCommentsAmount) return null;

		return (
			<div className="comments-loader btn" onClick={ onLoadMore.bind(this, lastCommentId) }>
				{ this.localeService.getLocalizedNameFor('loadMore') } { commentsAmount - currentCommentsAmount } { this.localeService.getLocalizedNameFor('comments') }
			</div>
		);
	}
}

export default CommentLoaderComponent;
