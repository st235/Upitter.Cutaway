import React from 'react';
import BaseLayout from '../../components/baseLayout/baseLayout';

export default class AuthorizationView extends BaseLayout {
	render() {
		return (
			<div>
				<div className="main-card">
					<div className="main-card-logo">
						<img src="/images/Upitter.png" alt="" />
					</div>
					<div className="main-card-title">
						<h1>Upitter Web-версия</h1>
					</div>
					<div className="main-card-description">
						<span>Приложение доступно для скачивания в google-play</span>
					</div>
					<div className="main-card-badges">
						<img src="/images/google-play-badge.png" alt="" />
						<img src="/images/App_Store_Badge.png" alt="" />
					</div>
				</div>
			</div>
		);
	}
}
