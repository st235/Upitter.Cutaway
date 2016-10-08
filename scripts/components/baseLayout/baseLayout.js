import React, { Component } from 'react';
import moment from 'moment';

import StoreService from '../../services/storeService';
import LocalStorageService from '../../services/localStorageService';
import ErrorService from '../../services/errorService';
import LocaleService from '../../services/localeService';
import UserService from '../../services/userService';
import LocationService from '../../services/locationService';

import ApiUtils from '../../utils/apiUtils';

export default class BaseLayout extends Component {
	constructor(props) {
		super(props);

		this._bindBasicMethods();
	}

	_bindBasicMethods() {
		if (this.onBind) this.onBind();
		if (this.onCreate) {
			this.onCreate = this.onCreate.bind(this);
			this.onCreate();
		}
		this.render = this.render.bind(this);
	}

	get store() {
		return StoreService.getStore();
	}

	get storage() {
		return LocalStorageService;
	}

	get request() {
		return ApiUtils;
	}

	get moment() {
		return moment;
	}

	get errorService() {
		return ErrorService;
	}

	get localeService() {
		return LocaleService;
	}

	get userService() {
		return UserService;
	}

	get locationService() {
		return LocationService;
	}
}
