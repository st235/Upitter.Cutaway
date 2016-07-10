import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import RoutesConfig from '../config/routes';

import StoreService from './storeService';

import LocalStorageService from './localStorageService';

export default class ApplicationService {
	constructor(document) {
		this.document = document;

		this.init = this.init.bind(this);
		this.render = this.render.bind(this);
	}

	init() {
		StoreService.init(this.render);
		LocalStorageService.init();
		this.render();
	}

	render() {
		ReactDom.render(<Router history={ browserHistory } routes={ RoutesConfig } />, this.document);
	}
}
