'use strict';

import LocalStorageService from './localStorageService';

export default class UserService {
	static init(authConfig) {
		// this._authConfig = authConfig;
	}

	static setCurrentUser(user) {
		LocalStorageService.set('currentUser', user);
	}

	static getCurrentUser() {
		return LocalStorageService.get('currentUser');
	}

	static setAccessToken(accessToken) {
		LocalStorageService.set('accessToken', accessToken);
	}

	static getAccessToken() {
		return LocalStorageService.get('accessToken');
	}

	static isLogged() {
		return !!LocalStorageService.get('currentUser');
	}

	static clearCurrentUser() {
		this.setCurrentUser(null);
	}
}
