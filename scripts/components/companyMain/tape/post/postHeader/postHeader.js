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
		const post = this.props.post;
		const postId = this.props.post.get('customId');
		const { optionalMenu } = this.store.getState();

		return (
			<div className="post-header">
				<PostCompanyInfo
					logoUrl={ post.get('author').get('logoUrl') }
					name={ post.get('author').get('name') }
					createdDate={ post.get('fromNow') }
				/>
				<div className="context-menu">
					<OptionalMenuButton
						shouldBeActive={ optionalMenu }
						onMenuOpened={ this.props.onMenuOpened }
					    postId={ postId }
					/>
					<OptionalMenu
						isOpened={ optionalMenu }
						postId={ postId }
						onShowOnMap={ this.props.onShowOnMap }
						onReport={ this.props.onReport }
						onShare={ this.props.onShare }
					/>
				</div>
			</div>
		);
	}
}

export default PostHeaderComponent;


