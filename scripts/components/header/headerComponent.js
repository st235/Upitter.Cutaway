'use strict';

import React from 'react';

import BaseLayout from '../baseLayout/baseLayout';
import HeaderLogo from './headerLogo/headerLogoComponent';
import HeaderMenu from './headerMenu/headerMenuComponent';
import HeaderSearch from './headerSearch/headerSearchComponent';
import HeaderLoginButton from './headerLoginButton/headerLoginButtonComponent';

class HeaderComponent extends BaseLayout {
	onBind() {
		
	}

	onCreate() {

	}

	render() {
		return (
			<header className="header">
				<div className="container">
					<HeaderLogo />
					<HeaderMenu />
					<HeaderSearch />
					<HeaderLoginButton />
				</div>
			</header>
		);
	}
}

export default HeaderComponent;


