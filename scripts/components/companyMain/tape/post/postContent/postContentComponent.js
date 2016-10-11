'use strict';

import React from 'react';

import BaseLayout from '../../../../baseLayout/baseLayout';
import PostTitle from './postTitle/postTitleComponent';
import PostText from './postText/postTextComponent';
import Gallery from './postGallery/postGalleryComponent';
import Voting from './voting/votingComponent';

class PostContentComponent extends BaseLayout {
	render() {
		const { post, onVote, onImageClicked } = this.props;
		if (!post) return null;

		return (
			<div className="post-content">
				<PostTitle title={ post.get('title') } />
				<PostText text={ post.get('text') } />
				<Gallery images={ post.get('images') } onImageClicked={ onImageClicked } />
				<Voting
					variants={ post.get('variants') }
					votersAmount={ post.get('votersAmount') }
					isVotedByMe={ post.get('isVotedByMe') }
					onVote={ onVote }
				/>
			</div>
		);
	}
}

export default PostContentComponent;


