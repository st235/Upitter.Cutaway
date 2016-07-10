import React, { Component } from 'react';

import StoreService from '../services/storeService';
import LocalStorageService from '../services/localStorageService';

import apiUtils from '../utils/apiUtils';

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
		return apiUtils;
	}
}