'use strict';

import React from 'react';
import BaseLayout from '../baseLayout/baseLayout';

class HeaderComponent extends BaseLayout {
	onBind() {
		
	}

	onCreate() {

	}

	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="header-logo">
						<img src="/images/Upitter.png" alt="" />
					</div>
					<nav className="header-menu">
						<ul>
							<li><a href="#">О нас</a></li>
							<li><a href="">Контакты</a></li>
						</ul>
					</nav>
					<div className="search">
						<div className="search-icon"></div>
						<input type="text" placeholder="Поиск.." />
					</div>
					<div className="header-right">
						<button className="btn btn--line">Войти</button>
					</div>
				</div>
			</header>
		);
	}
}

export default HeaderComponent;


