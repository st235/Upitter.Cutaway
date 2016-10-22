'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class CommentComponent extends BaseLayout {
	onBind() {
		this.onClick = this.onClick.bind(this);
	}

	onClick(comment) {
		const { onChoseReplyTo } = this.props;
		return () => onChoseReplyTo(comment);
	}

	render() {
		const { comment, onChoseReplyTo } = this.props;
		return (
			<div className="comment-item has-ava" onClick={ this.onClick(comment) }>
				<div className="comment-item-header">
					<img className="user-ava" src={ comment.authorAvatar } />
					<div className="comment-item-name">{ comment.authorName }</div>
					<div className="comment-item-date">{ comment.date }</div>
				</div>
				<div className="comment-item-body">
					{ comment.text }
				</div>
			</div>
		);
	}
}

export default CommentComponent;
