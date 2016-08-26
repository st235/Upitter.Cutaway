'use strict';

import React from 'react';
import BaseLayout from '../../baseLayout/baseLayout';

class HeaderMenuComponent extends BaseLayout {
	render() {
		return (
			<nav className="header-menu">
				<ul>
					<li><a href="#">О нас</a></li>
					<li><a href="">Контакты</a></li>
				</ul>
			</nav>
		);
	}
}

export default HeaderMenuComponent;


