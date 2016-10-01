'use strict';

import React from 'react';
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import VkLogin from '../../vkLogin/vkLoginComponent';

import BaseLayout from '../../baseLayout/baseLayout';

import socialConfig from '../../../config/social';

class ProfileContent extends BaseLayout {

	render() {
		const { showUnauthorized = true, onGoogleAuth, onFacebookAuth, onVkAuth, onTwitterAuth } = this.props;

		if (!showUnauthorized) return null;

		return (
			<Modal isOpen={ showUnauthorized } >
				<h1>Для того, чтобы подписаться, лайкнуть или репостнуть запись, необходимо авторизоваться</h1>
				<p>Авторизоваться через:</p>
				<div>
					<FacebookLogin
						appId={ socialConfig.auth.facebook.appId }
						autoLoad={ true }
						fields="name"
						onClick={console.log}
						callback={console.log} />
				</div>
				<div><button>TWITTER</button></div>
				<div>
					<GoogleLogin
						clientId={ socialConfig.auth.google.clientId }
						buttonText="Google"
						onSuccess={console.log}
						onFailure={console.log}
					/>
				</div>
				<div>
					<VkLogin appId={ "5624119" } autoLoad={ true }
					callback={ () => {
					console.log(window.VK);
					} }/>
				</div>
			</Modal>
		);
	}
}

export default ProfileContent;
