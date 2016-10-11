'use strict';

import React from 'react';

import BaseLayout from '../baseLayout/baseLayout';
import HeaderLogo from './headerLogo/headerLogoComponent';
import HeaderMenu from './headerMenu/headerMenuComponent';
import HeaderSearch from './headerSearch/headerSearchComponent';
import HeaderLoginButton from './headerLoginButton/headerLoginButtonComponent';

import { TOGGLE_UNAUTHORIZED } from '../../actions/unauthorizedActions';

class HeaderComponent extends BaseLayout {
	onBind() {
		this.onLogin = this.onLogin.bind(this);
		this.onLogout = this.onLogout.bind(this);
	}

	onCreate() {

	}

	onLogin() {
		this.store.dispatch(TOGGLE_UNAUTHORIZED());
	}

	onLogout() {
		this.userService.clearCurrentUser();
	}

	render() {
		return (
			<header className="header">
				<div className="container">
					<HeaderLogo />
					<HeaderMenu />
					<HeaderSearch />
					<HeaderLoginButton isLogged={ this.userService.getCurrentUser() } onLogin={ this.onLogin } onLogout={ this.onLogout } />
				</div>
			</header>
		);
	}
}

export default HeaderComponent;


