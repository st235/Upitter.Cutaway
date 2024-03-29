import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';

import StoreService from './storeService';
import LocaleService from './localeService';
import LocalStorageService from './localStorageService';
import UserService from './userService';
import LocationService from './localeService';
import moment from 'moment';

import routesConfig from '../config/routes';
import socialConfig from '../config/social';

export default class ApplicationService {
	constructor(document) {
		this.document = document;

		this.init = this.init.bind(this);
		this.render = this.render.bind(this);
	}

	init() {
		StoreService.init(this.render);
		LocalStorageService.init();
		LocaleService.init();
		UserService.init(socialConfig.auth);
		LocationService.init();

		if (LocaleService.getLocale() === 'ru') require('moment/locale/ru');

		this.render();
	}

	render() {
		ReactDom.render(<Router history={ browserHistory } routes={ routesConfig } />, this.document);
	}
}
