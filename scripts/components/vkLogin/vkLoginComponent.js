'use strict';

import React from 'react';
import BaseLayout from '../baseLayout/baseLayout';

class VkLoginComponent extends BaseLayout {
	onBind() {
		this.onClick = this.onClick.bind(this);
		this.responseApi = this.responseApi.bind(this);
		this.checkLoginState = this.checkLoginState.bind(this);
	}

	componentDidMount() {
		const { appId, autoLoad } = this.props;
		let vkRoot = document.getElementById('vk_api_transport');

		if (!vkRoot) {
			vkRoot = document.createElement('div');
			vkRoot.id = 'vk_api_transport';

			document.body.appendChild(vkRoot);
		}

		window.vkAsyncInit = () => {
			window.VK.init({
				appId
			});

			if (autoLoad) window.VK.Auth.getLoginStatus(this.checkLoginState);
		};

		setTimeout(() => {
			const el = document.createElement('script');
			el.type = 'text/javascript';
			el.src = '//vk.com/js/api/openapi.js';
			el.async = true;
			document.getElementById('vk_api_transport').appendChild(el);
		}, 0);
	}

	responseApi(authResponse) {
		window.FB.api('/me', { fields: this.props.fields }, (me) => {
			Object.assign(me, authResponse);
			this.props.callback(me);
		});
	}

	checkLoginState(response) {
		if (response.authResponse) {
			this.responseApi(response.authResponse);
		} else {
			if (this.props.callback) {
				this.props.callback({ status: response.status });
			}
		}
	}

	onClick() {
		const { scope, appId } = this.props;
		let isMobile = false;

		try {
			isMobile = ((window.navigator && window.navigator.standalone) || navigator.userAgent.match('CriOS') || navigator.userAgent.match('mobile'));
		} catch (ex) { }

		if (isMobile) {
			// https://www.oauth.vk.com/authorize?client_id=5624119&redirect_uri=https://oauth.vk.com/blank.html&scope=12&display=popup
			window.location.href = `https://www.oauth.vk.com/authorize?client_id=${appId}&redirect_uri=${window.location.href}&scope=${scope}&display=popup`;
			// window.location.href = `https://www.facebook.com/dialog/oauth?client_id=${appId}&redirect_uri=${window.location.href}&state=facebookdirect&${scope}`;
		} else {
			window.FB.login(this.checkLoginState, { scope });
		}
	}

	render() {
		return (
			<div className="header-right" onClick={ this.authWithVk }>
				Авторизуемся через контач
			</div>
		);
	}
}

VkLoginComponent.PropTypes = {
	callback: React.PropTypes.func.isRequired,
	appId: React.PropTypes.string.isRequired,
	scope: React.PropTypes.string,
	textButton: React.PropTypes.string,
	autoLoad: React.PropTypes.bool,
	cssClass: React.PropTypes.string
};

VkLoginComponent.DefaultProps = {
	textButton: 'Login with Facebook',
	cssClass: 'kep-login-facebook',
};

export default VkLoginComponent;

// <button className="btn btn--line">Войти</button>
