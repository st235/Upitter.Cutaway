'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class AddCommentComponent extends BaseLayout {
	onCreate() {
		this.state = { value: '' };
	}
	onBind() {
		this.onChange = this.onChange.bind(this);
		this.onPublish = this.onPublish.bind(this);
	}

	onChange(e) {
		this.setState({value: e.target.value});
	}

	onPublish() {
		const { onPublishComment, replyTo } = this.props;
		onPublishComment(this.state.value, replyTo);
	}

	render() {
		return (
			<div className="comment-footer">
				<form className="comment-form">
					<input type="text" onChange={ this.onChange } className="form-control" placeholder="Комментировать.." value={ this.state.value } />
					<div className="input-group-btn">
						<button className="btn" onClick={ this.onPublish }>Комментировать</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddCommentComponent;
