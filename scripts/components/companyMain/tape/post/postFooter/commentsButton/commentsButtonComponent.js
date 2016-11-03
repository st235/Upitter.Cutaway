'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class PostHeaderComponent extends BaseLayout {
	render() {
		const { commentsAmount, onShowComments } = this.props;
		return (
			<div className="action-btn" onClick={ onShowComments }>
				<div className="action-icon action-icon--comment"></div>
				<div className="counter">{ commentsAmount }</div>
			</div>
		);
	}
}

export default PostHeaderComponent;


