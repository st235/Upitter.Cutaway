import React, { Component } from 'react';

import AjaxService from '../services/ajaxServiceWithLoading';
import StoreService from '../services/storeService';
import LocalStorageService from '../services/localStorageService';

export default class BaseLayout extends Component {
	constructor(props) {
		super(props);
		this.bind();
	}

	get store() {
		return StoreService.getStore();
	}

	get storage() {
		return LocalStorageService;
	}

	get request() {
		return AjaxService;
	}
}