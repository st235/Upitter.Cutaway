'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class CommentComponent extends BaseLayout {
	onBind() {
		this.onClick = this.onClick.bind(this);
	}

	onClick(comment) {
		// const { onChoseReplyTo } = this.props;
		// return () => onChoseReplyTo(comment);
	}

	render() {
		const { comment, onChoseReplyTo } = this.props;

		return (
			<div className="comment-item has-ava" >
				<div className="comment-item-header">
					<img className="user-ava" src={
						comment.author ? comment.author.avatarUrl || comment.author.logoUrl : null
					} />
					<div className="comment-item-name">{
						comment.author ? comment.author.name : null
					}</div>
					<div className="comment-item-date">{ this.moment(comment.timeStamp).fromNow() }</div>
				</div>
				<div className="comment-item-body">
					{ comment.text }
				</div>
			</div>
		);
	}
}

export default CommentComponent;
