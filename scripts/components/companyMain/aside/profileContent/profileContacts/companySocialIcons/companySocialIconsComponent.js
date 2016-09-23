'use strict';

import React from 'react';
import _ from 'underscore';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class SocialIconsComponent extends BaseLayout {
	onBind() {
		this.generateSocialLinks = this.generateSocialLinks.bind(this);
	}

	onCreate() {

	}

	generateSocialLinks(socialArr) {
		if (!socialArr || !socialArr.length) return null;

		return _.map(socialArr, (network, index) => {
			if (!network.link || !network.icon) return null;

			const style = {
				backgroundImage: `url(${network.link})`
			};

			return (
				<a key={ index } style={ style } href={ network.link }>
					<div className="social-icon"></div>
				</a>
			);
		});
	}

	render() {
		const { company } = this.store.getState();

		return (
			<div className="profile-contacts_social">
				{ this.generateSocialLinks(company.socialLinks) }
			</div>
		);
	}
}

export default SocialIconsComponent;



// <div className="social-icon social-icon--vk"></div>
// <div className="social-icon social-icon--facebook"></div>
// 	<div className="social-icon social-icon--instagram"></div>
// 	<div className="social-icon social-icon--twitter"></div>