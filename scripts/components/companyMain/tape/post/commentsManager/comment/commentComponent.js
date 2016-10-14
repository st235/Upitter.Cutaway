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
			<div className="comment" onClick={ this.onClick(comment) }>
				<p>{ comment.text }</p>
			</div>
		);
	}
}

export default CommentComponent;
