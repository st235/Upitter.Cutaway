'use strict';

import LocalStorageService from './localStorageService';

export default class UserService {
	static init(authConfig) {
		this._authConfig = authConfig;
	}

	setCurrentUser(user) {
		LocalStorageService.set('currentUser', user);
	}

	static getCurrentUser() {
		return LocalStorageService.get('currentUser');
	}

	static getAccessToken() {
		const user = LocalStorageService.get('currentUser');
		return user ? user.accessToken : null;
	}

	static isLogged() {
		return !!LocalStorageService.get('currentUser');
	}

	static clearCurrentUser() {
		this.setCurrentUser(null);
	}
}
