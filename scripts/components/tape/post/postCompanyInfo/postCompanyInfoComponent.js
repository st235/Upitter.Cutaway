'use strict';

import React from 'react';
import BaseLayout from '../../../baseLayout/baseLayout';

class PostsNumberComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="post-company">
				<div className="post-company_ava">
					<img src="/images/logo_company.png" alt="ava" />
				</div>
				<div className="post-company_info">
					<div className="post-name"><a href="#">Roundplace</a></div>
					<div className="post-other">12.08.2016</div>
				</div>
			</div>
		);
	}
}

export default PostsNumberComponent;


