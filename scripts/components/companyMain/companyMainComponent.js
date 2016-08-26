'use strict';

import React from 'react';
import BaseLayout from '../baseLayout/baseLayout';

class CompanyMainComponent extends BaseLayout {
	render() {
		const { children } = this.props;
		return (
			<main className="main">
				<div className="container">
					<div className="content content--side-left">{ children }</div>
				</div>
			</main>
		);
	}
}

export default CompanyMainComponent;


