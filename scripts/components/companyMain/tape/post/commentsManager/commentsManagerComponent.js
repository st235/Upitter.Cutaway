'use strict';

import React from 'react';

import BaseLayout from '../../../../baseLayout/baseLayout';
import Comment from './comment/commentComponent';
import AddComment from './addComment/addCommentComponent';
import CommentsLoader from './commentsLoader/commentsLoaderComponent';

import { ADD_COMMENTS, ADD_NEW_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from '../../../../../actions/commentsActions';

class CommentsManagerComponent extends BaseLayout {
	constructor() {
		super();

		this.state = {
			authorId: null
		};
	}

	onBind() {
		this.generateComments = this.generateComments.bind(this);
	}

	generateComments() {
		const { comments, onChoseReplyTo } = this.props;

		if (!comments || !comments.size) return <span>Комментарии отсутствуют</span>;

		return comments.map((comment, index) => <Comment key={ index } comment={ comment } onChoseReplyTo={ onChoseReplyTo } />);
	}

	render() {
		const { showComments, comments, commentsAmount, postId, onPublishComment, onLoadMore } = this.props;
		const currentCommentsAmount = (comments && commentsAmount && comments.size) ? commentsAmount - comments.size : 0;
		const lastCommentId = comments ? comments.get(postId).last().customId : null;

		if (!showComments) return null;

		return (
			<div className="post-comments">
				<CommentsLoader
					onLoadMore={ onLoadMore }
					commentsAmount={ commentsAmount }
					currentCommentsAmount={ currentCommentsAmount }
					lastCommentId={ lastCommentId }
				/>
				<div className="comments-list">
					{ this.generateComments() }
				</div>
				<AddComment
					onPublishComment={ onPublishComment }
					replyTo={ this.state.authorId }
				/>
			</div>
		);
	}
}

export default CommentsManagerComponent;
