'use strict';

import React from 'react';
import BaseLayout from './baseLayout';

class SubscriberInfoComponent extends BaseLayout {
	constructor(props) {
		super(props);

		this.bind();
		this.create();
	}

	bind() {
		this.render = this.render.bind(this);
		this.create = this.create.bind(this);
		this.showNickname = this.showNickname.bind(this);
		this.showSex = this.showSex.bind(this);
		this.showName = this.showName.bind(this);
		this.showSurname = this.showSurname.bind(this);
		this.showEmail = this.showEmail.bind(this);
		this.showPicture = this.showPicture.bind(this);
		this.showDescription = this.showDescription.bind(this);
	}

	create() {
		this.subscriber = this.props.subscriber;
	}

	showNickname() {
		return <span>{ this.subscriber.nickname }</span>;
	}

	showSex() {
		return <p>{ this.subscriber.nickname }</p>;

	}

	showName() {
		const { name } = this.subscriber;
		if (!name) return null;
		return <span>{ name }</span>;
	}

	showSurname() {
		const { surname } = this.subscriber;
		if (!surname) return null;
		return <span>{ surname }</span>;
	}

	showEmail() {
		const { email } = this.subscriber;
		if (!email) return null;
		return <p>{ email }</p>;
	}

	showPicture() {
		const { picture, nickname } = this.company;
		if (!picture) return null;
		return <img src={ picture } alt={ `${name} avatar` } />;
	}

	showDescription() {
		const { description } = this.subscriber;
		if (!description) return null;
		return <p>{ description }</p>;
	}

	render() {
		if (!this.subscriber) return null;

		return (
			<div>
				<div>{ this.showPicture() }</div>
				<p>{this.showName()} {this.showNickname()} {this.showSurname()}</p>
				{ this.showEmail() }
				{ this.showSex() }
				{ this.showDescription() }
			</div>
		);
	}
}


SubscriberInfoComponent.propTypes = {
	subscriber: React.PropTypes.object
};

export default SubscriberInfoComponent;
