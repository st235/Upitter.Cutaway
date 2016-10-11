'use strict';

import LocalStorageService from './localStorageService';
import StoreService from './storeService';
import { SET_USER, SET_ACCESS_TOKEN, LOGOUT } from '../actions/userActions';

export default class UserService {
	static init(authConfig) {
		// this._authConfig = authConfig;
	}

	static setCurrentUser(user) {
		LocalStorageService.set('currentUser', user);
		StoreService.getStore().dispatch(SET_USER(user));
	}

	static getCurrentUser() {
		return LocalStorageService.get('currentUser');
	}

	static setAccessToken(accessToken) {
		LocalStorageService.set('accessToken', accessToken);
		StoreService.getStore().dispatch(SET_ACCESS_TOKEN(accessToken));
	}

	static getAccessToken() {
		return LocalStorageService.get('accessToken');
	}

	static isLogged() {
		return !!LocalStorageService.get('currentUser');
	}

	static logout() {
		this.setCurrentUser(null);
		this.setAccessToken(null);
		StoreService.getStore().dispatch(LOGOUT());
	}
}
