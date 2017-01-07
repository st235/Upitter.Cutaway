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
		this.scrollBottom = this.scrollBottom.bind(this);
	}

	scrollBottom() {
		const { comments } = this.props;

		if (comments && this.commentsList) {
			this.commentsList.scrollTop = this.commentsList.scrollHeight - this.commentsList.clientHeight;
		}
	}

	generateComments() {
		const { comments, onChoseReplyTo } = this.props;

		if (!comments || !comments.size) return <span>Комментарии отсутствуют</span>;

		return comments
			.sort((commentOne, commentTwo) => commentOne.customId > commentTwo.customId)
			.map((comment, index) => <Comment key={ index } comment={ comment } onChoseReplyTo={ onChoseReplyTo } />);
	}

	render() {
		const { showComments, comments, commentsAmount, postId, onPublishComment, onLoadMore } = this.props;
		const currentCommentsAmount = (comments && comments.size) ? comments.size : 0;
		const lastCommentId = comments ? comments.first().customId : null;
		console.log(lastCommentId);

		if (!showComments) return null;

		return (
			<div className="post-comments">
				<CommentsLoader
					onLoadMore={ onLoadMore }
					commentsAmount={ commentsAmount }
					currentCommentsAmount={ currentCommentsAmount }
					lastCommentId={ lastCommentId }
				/>
				<div className="comments-list"
					ref={(commentsList) => { this.commentsList = commentsList; this.scrollBottom(); }}
				>
					{ this.generateComments() }
				</div>
				<AddComment
					onPublishComment={ onPublishComment }
					scrollBottom = { this.scrollBottom }
					replyTo={ this.state.authorId }
				/>
			</div>
		);
	}
}

export default CommentsManagerComponent;
