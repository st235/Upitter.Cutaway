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
			<div className="add-comment">
				<textarea placeholder="Введите что-нибудь" value={ this.state.value }>

				</textarea>
				<button onClick={ this.onPublish }>Опубликовать комментарий</button>
			</div>
		);
	}
}

export default AddCommentComponent;
