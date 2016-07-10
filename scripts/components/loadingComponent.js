import React, { Component } from 'react';

class LoadingComponent extends Component {
	constructor(props) {
		super(props);

		this.render = this.render.bind(this);
	}

	render() {
		const { shouldBeShown } = this.props;

		if (shouldBeShown) {
			return (
				<div className="ui active dimmer">
					<div className="ui indeterminate text loader"> Preparing  Information</div>
				</div>
			);
		}

		return <div />;
	}
}

LoadingComponent.propTypes = {
	shouldBeShown: React.PropTypes.bool
};

export default LoadingComponent;
