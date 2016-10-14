'use strict';

import React from 'react';
import _ from 'underscore';

import BaseLayout from '../../../../baseLayout/baseLayout';
import Comment from './comment/commentComponent';
import AddComment from './addComment/addCommentComponent';
import CommentsLoader from './commentsLoader/commentsLoaderComponent';

import { ADD_COMMENTS, ADD_NEW_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from '../../../../../actions/commentsActions';

class CommentsManagerComponent extends BaseLayout {
	componentDidMount() {
		this.state = {
			authorId: null
		};
	}
	onBind() {
		this.generateComments = this.generateComments.bind(this);
	}

	generateComments() {
		const { comments, onChoseReplyTo } = this.props;

		if (!comments || !comments.size) return <p>Комментарии отсутствуют</p>;

		return comments.map((comment, index) => <Comment key={ index } comment={ comment } onChoseReplyTo={ onChoseReplyTo } />);
	}

	render() {
		const { comments, commentsAmount, postId, onPublishComment, onLoadMore } = this.props;
		return (
			<div className="comments-manager">
				<CommentsLoader
					onLoadMore={ onLoadMore }
					commentsAmount={ commentsAmount }
					currentCommentsAmount={ commentsAmount - comments.size }
					lastCommentId={ comments.get(postId).last().customId }
				/>
				<ul>
					{ this.generateComments() }
				</ul>
				<AddComment
					onPublishComment={ onPublishComment }
					replyTo={ this.state.authorId }
				/>
			</div>
		);
	}
}

export default CommentsManagerComponent;
