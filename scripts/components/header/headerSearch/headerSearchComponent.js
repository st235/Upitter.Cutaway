'use strict';

import React from 'react';
import BaseLayout from '../../baseLayout/baseLayout';

class HeaderSearchComponent extends BaseLayout {
	render() {
		return (
			<div className="search">
				<div className="search-icon"></div>
				<input type="text" placeholder="Поиск.." />
			</div>
		);
	}
}

export default HeaderSearchComponent;


