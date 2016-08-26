'use strict';

import React from 'react';
import BaseLayout from '../../baseLayout/baseLayout';

class HeaderLoginButtonComponent extends BaseLayout {
	render() {
		return (
			<div className="header-right">
				<button className="btn btn--line">Войти</button>
			</div>
		);
	}
}

export default HeaderLoginButtonComponent;


