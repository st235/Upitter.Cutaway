import React from 'react';
import { browserHistory } from 'react-router';
import BaseLayout from '../../components/baseLayout';

import LoadingComponent from '../../components/loadingComponent';

import { METHOD_VERIFY_TOKEN } from '../../config/methods';
import { UNAUTHORIZED, AUTHORIZED } from '../../actions/loadingActions';
import { VIEW_ERROR, VIEW_SUCCESS, VIEW_PENDING } from '../../actions/viewAction';


export default class AuthorizationView extends BaseLayout {
	constructor(props) {
		super(props);
	}

	bind() {
		this.render = this.render.bind(this);
		this.onAuthorizeClick = this.onAuthorizeClick.bind(this);
		this.showErrorView = this.showErrorView.bind(this);
	}

	onAuthorizeClick(e) {
		const token = this.refs.tokenInput.value;
		if (!token || token.length === 0) return this.store.dispatch(VIEW_ERROR);

		const method = `${METHOD_VERIFY_TOKEN}${token}`;
		this.store.dispatch(VIEW_PENDING);

		this
			.request
			.sendGet(method)
			.then(res => {
				if (res.response) {
					this.storage.set('ACCESS_TOKEN', token);
					this.store.dispatch(VIEW_SUCCESS);
					this.store.dispatch(AUTHORIZED(token));
					return;
				}

				this.store.dispatch(VIEW_SUCCESS);
				this.store.dispatch(UNAUTHORIZED);
			})
			.catch(error => this.store.dispatch(VIEW_ERROR));
	}

	showErrorView(state, authorization) {
		if (state === 'VIEW_DEFAULT') return;
		if (state === VIEW_ERROR.type) {
			return (
				<div className="ui error message">
					<ul className="list">
						<li>Возможно, Вы не передали accessToken</li>
						<li>Возможно, соединение с сервером было потеряно</li>
						<li>Возможно, введенный Вам токен недействителен</li>
						<li>Возможно, сервер не отвечает</li>
						<li>Возможноб у Вас проблемы с головой, но это уже другая история</li>
					</ul>
				</div>
			);
		}

		if (!authorization.isAuthorized) {
			return (
				<div className="ui info message">
					Токен истек или недействителен
				</div>
			);
		}
	}

	render() {
		const viewState = this.store.getState().viewState || 'VIEW_DEFAULT';
		const { authorizationState } = this.store.getState();

		if (viewState === VIEW_PENDING.type) return <LoadingComponent />;
		if (authorizationState.isAuthorized) {
			this.store.dispatch(VIEW_PENDING);
			browserHistory.push('/logs');
			return <span />;
		}

		return (
			<div className="ui middle aligned center aligned grid">
				<div id="login_column" className="column">
					<h2 className="ui blue image header">
							<div className="content">
								Log-in to Upiter Admin
							</div>
					</h2>
					<div className="ui large form">
						<div className="ui stacked segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon" />
									<input ref="tokenInput" type="text" placeholder="Put your credentials" />
								</div>
							</div>
							<button className="ui fluid large blue submit button" onClick={this.onAuthorizeClick}>Login</button>
						</div>
					</div>
					{this.showErrorView(viewState, authorizationState)}
				</div>
			</div>
		);
	}
}
