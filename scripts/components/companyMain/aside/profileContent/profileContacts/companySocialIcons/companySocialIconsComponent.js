'use strict';

import React from 'react';
import _ from 'underscore';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class SocialIconsComponent extends BaseLayout {
	onBind() {
		this.generateSocialLinks = this.generateSocialLinks.bind(this);
	}

	generateSocialLinks(socialArr) {
		if (!socialArr || !socialArr.length) return null;

		return _.map(socialArr, (network, index) => {
			if (!network.link || !network.icon) return null;

			let classType = '';
			switch (network.customId) {
			case '0':
				classType = 'social-icon--vk';
				break;
			case '1':
				classType = 'social-icon--twitter';
				break;
			case '2':
				classType = 'social-icon--instagram';
				break;
			case '3':
				classType = 'social-icon--skype';
				break;
			case '4':
				classType = 'social-icon--whatsapp';
				break;
			case '5':
				classType = 'social-icon--google';
				break;
			case '6':
				classType = 'social-icon--viber';
				break;
			case '7':
				classType = 'social-icon--youtube';
				break;
			case '8':
				classType = 'social-icon--facebook';
				break;
			case '9':
				classType = 'social-icon--ok';
				break;
			}

			return <a key={ index } href={ network.link } className={`social-icon ${classType}`} />;
		});
	}

	render() {
		const { company } = this.store.getState();

		return (
			<div className='profile-contacts_social'>
				{ this.generateSocialLinks(company.socialLinks) }
			</div>
		);
	}
}

export default SocialIconsComponent;



// <div className='social-icon social-icon--vk'></div>
// <div className='social-icon social-icon--facebook'></div>
// 	<div className='social-icon social-icon--instagram'></div>
// 	<div className='social-icon social-icon--twitter'></div>