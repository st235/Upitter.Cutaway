'use strict';

import React from 'react';
import BaseLayout from './baseLayout';

import SubscriberInfo from './subscriberInfoComponent';

class CompanyInfoComponent extends BaseLayout {
	constructor(props) {
		super(props);

		this.bind();
		this.create();
	}

	bind() {
		this.render = this.render.bind(this);
		this.create = this.create.bind(this);
		this.showActivity = this.showActivity.bind(this);
		this.showName = this.showName.bind(this);
		this.showVerification = this.showVerification.bind(this);
		this.showDescription = this.showDescription.bind(this);
		this.showLogo = this.showLogo.bind(this);
		this.showSite = this.showSite.bind(this);
		this.showSubscribersList = this.showSubscribersList.bind(this);
	}

	create() {
		this.company = this.props.company;
	}

	showActivity() {
		return <span>{ this.company.activity }</span>;
	}

	showName() {
		return <span>{ this.company.name }</span>;
	}

	showVerification() {
		const { isVerify } = this.company;
		if (!isVerify) return null;
		return <span>Компания подтверждена!</span>;
	}

	showDescription() {
		const { description } = this.company;
		if (!description) return null;
		return <p>{ description }</p>;
	}

	showLogo() {
		const { logoUrl, name } = this.company;
		if (!logoUrl) return null;
		return <img src={ logoUrl } alt={ `${name} company logo` } />;
	}

	showSite() {
		const { site } = this.company;
		if (!site) return null;
		return <p>{ site }</p>;
	}

	showSubscribersList() {
		const { subscribers } = this.company;
		if (!subscribers || !subscribers.length) return null;

		let id = 0;
		const subscriberInfoElements = subscribers.map(subscriber => {
			id++;
			return <SubscriberInfo key={ id } subscriber={ subscriber } />;
		});

		return (
			<div>{ subscriberInfoElements }</div>
		);
	}

	render() {
		if (!this.company) return <p>Sorry, company with such name was not found!</p>;

		return (
			<div>
				{ this.showSubscribersList() }
			</div>
		);
	}
}

CompanyInfoComponent.propTypes = {
	company: React.PropTypes.object
};

export default CompanyInfoComponent;
