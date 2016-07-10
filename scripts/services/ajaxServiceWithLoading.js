'use strict';

import AjaxService from './ajaxService';
import StoreService from './storeService';

import { TOGGLE_LOADING } from '../actions/loadingActions';

class AjaxServiceWithLoading extends AjaxService {
	static sendPost(url, body) {
		this._toggleLoading();
		return super.sendPost(url, body).then(result => {
			this._toggleLoading();
			return result;
		}).catch(err => {
			this._toggleLoading();
			throw err;
		});
	}

	static sendGet(url, query) {
		this._toggleLoading();
		return super.sendGet(url, query).then(result => {
			this._toggleLoading();
			return result;
		}).catch(err => {
			this._toggleLoading();
			throw err;
		});
	}

	static _toggleLoading() {
		StoreService.getStore().dispatch(TOGGLE_LOADING());
	}
}

export default AjaxServiceWithLoading;
