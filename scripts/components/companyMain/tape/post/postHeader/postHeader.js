'use strict';

import React from 'react';

import BaseLayout from '../../../../baseLayout/baseLayout';
import PostCompanyInfo from './postCompanyInfo/postCompanyInfoComponent';
import OptionalMenuButton from './optionalMenuButton/optionalMenuButtonComponent';
import OptionalMenu from './optionalMenu/optionalMenuComponent';

class PostHeaderComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		return (
			<div className="post-header">
				<PostCompanyInfo />
				<div className="context-menu">
					<OptionalMenuButton />
					<OptionalMenu />
				</div>
			</div>
		);
	}
}

export default PostHeaderComponent;


