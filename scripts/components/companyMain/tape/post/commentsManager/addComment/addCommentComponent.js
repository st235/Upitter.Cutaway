'use strict';

import React from 'react';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class AddCommentComponent extends BaseLayout {
	onCreate() {
		this.state = {
			value: '',
			isDisabled: true
		};
	}
	onBind() {
		this.onChange = this.onChange.bind(this);
		this.onPublish = this.onPublish.bind(this);
	}

	onChange(e) {
		const value = e.target.value;
		this.setState({
			value,
			isDisabled: !(value && value.length && value.length > 3)
		});
	}

	onPublish() {
		const { onPublishComment } = this.props;

		onPublishComment(this.state.value).then(() => {
			this.setState({
				value: '',
				isDisabled: true
			});
		});
	}

	render() {
		return (
			<div className="comment-footer">
				<div className="comment-form">
					<input type="text" onChange={ this.onChange } className="form-control" placeholder="Комментировать.." value={ this.state.value } />
					<div className="input-group-btn">
						<button  disabled={ this.state.isDisabled } className="btn" onClick={ this.onPublish }>{ this.localeService.getLocalizedNameFor("addComment") }</button>
					</div>
				</div>
			</div>
		);
	}
}

export default AddCommentComponent;
