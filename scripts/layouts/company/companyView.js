import React from 'react';

import BaseLayout from '../../components/baseLayout/baseLayout';
import Header from '../../components/header/headerComponent';
import CompanyMain from '../../components/companyMain/companyMainComponent';
import Aside from '../../components/companyMain/aside/asideComponent';
import Tape from '../../components/companyMain/tape/tapeComponent';
import Footer from '../../components/footer/footerComponent';

export default class LogView extends BaseLayout {
	render() {
		const { alias } = this.props.params;
		return (
			<div>
				<Header />
				<CompanyMain alias={ alias } >
					<Aside />
					<Tape />
				</CompanyMain>
				<Footer />
			</div>
		);
	}
}
