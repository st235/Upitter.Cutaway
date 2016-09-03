'use strict';

import React from 'react';
import BaseLayout from '../../../../../baseLayout/baseLayout';

class PostsNumberComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { logoUrl, name, createdDate } = this.props;
		return (
			<div className="post-company">
				<div className="post-company_ava">
					<img src={ logoUrl } alt="ava" />
				</div>
				<div className="post-company_info">
					<div className="post-name"><a href="#">{ name }</a></div>
					<div className="post-other">{ createdDate }</div>
				</div>
			</div>
		);
	}
}

export default PostsNumberComponent;


