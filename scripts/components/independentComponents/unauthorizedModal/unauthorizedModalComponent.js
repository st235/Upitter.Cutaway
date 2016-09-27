'use strict';

import React from 'react';
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import BaseLayout from '../../baseLayout/baseLayout';

import socialConfig from '../../../config/social';

class ProfileContent extends BaseLayout {

	render() {
		const { showUnauthorized, onGoogleAuth, onFacebookAuth, onVkAuth, onTwitterAuth } = this.props;

		if (!showUnauthorized) return null;

		return (
			<Modal isOpen={ showUnauthorized } >
				<h1>Для того, чтобы подписаться, лайкнуть или репостнуть запись, необходимо авторизоваться</h1>
				<p>Авторизоваться через:</p>
				<div>
					<FacebookLogin
						appId={ socialConfig.auth.facebook.appId }
						autoLoad={ true }
						fields="accessToken"
						onClick={console.log}
						callback={onFacebookAuth} />
				</div>
				<div><button>TWITTER</button></div>
				<div>
					<GoogleLogin
						clientId={ socialConfig.auth.google.clientId }
						buttonText="Google"
						onSuccess={onGoogleAuth}
						onFailure={onGoogleAuth}
					/>
				</div>
				<div><button>VKONTAKTE</button></div>
			</Modal>
		);
	}
}

export default ProfileContent;
