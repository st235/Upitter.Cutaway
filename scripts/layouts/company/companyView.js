import React from 'react';

import BaseLayout from '../../components/baseLayout';

export default class LogView extends BaseLayout {
	constructor(props) {
		super(props);
	}

	bind() {
		this.render = this.render.bind(this);
		this.obtainLog = this.obtainLog.bind(this);
		this.handleError = this.handleError.bind(this);
	}

	obtainLog(log) {
		return JSON.stringify(JSON.parse(log), null, 4);
	}

	handleError(log) {
		if (!log.log) {
			return (
				<div className="ui error message">
					Log не найден. Переход по прямой ссылке невозможен.
				</div>
			);
		}

		return <pre>{this.obtainLog(log.log)}</pre>;
	}

	render() {
		const { log } = this.store.getState();

		return (
			<div className="ui container">
				<div className="row">
					<h2 className="ui center aligned icon header">
						<i className="file text outline icon" />
						{log.logId}
					</h2>
				</div>
				<div className="row">
					{this.handleError(log)}
				</div>
			</div>
		);
	}
}
