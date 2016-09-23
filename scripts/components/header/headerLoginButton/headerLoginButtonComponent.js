'use strict';

import React from 'react';
import BaseLayout from '../../baseLayout/baseLayout';

class HeaderLoginButtonComponent extends BaseLayout {
	render() {
		const { isLogged, onLogin, onLogout } = this.props;

		if (isLogged) {
			return (
				<div className="header-right">
					<button onClick={ onLogout } className="btn btn--line">{ this.localeService.getLocalizedNameFor('logout') }</button>
				</div>
			);
		}

		return (
			<div className="header-right">
				<button onClick={ onLogin } className="btn btn--line">{ this.localeService.getLocalizedNameFor('login') }</button>
			</div>
		);
	}
}

export default HeaderLoginButtonComponent;

