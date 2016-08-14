'use strict';

import AjaxService from './ajaxService';
import StoreService from './storeService';

import { TOGGLE_LOADING } from '../actions/loadingActions';

class AjaxServiceWithLoading extends AjaxService {
	static sendPost(url, body, loadingIdentifier) {
		this._toggleLoading(loadingIdentifier);
		return super.sendPost(url, body).then(result => {
			this._toggleLoading(loadingIdentifier);
			return result;
		}).catch(err => {
			this._toggleLoading(loadingIdentifier);
			throw err;
		});
	}

	static sendGet(url, query, loadingIdentifier) {
		this._toggleLoading(loadingIdentifier);
		return super.sendGet(url, query).then(result => {
			this._toggleLoading(loadingIdentifier);
			return result;
		}).catch(err => {
			this._toggleLoading(loadingIdentifier);
			throw err;
		});
	}

	static _toggleLoading(loadingIdentifier) {
		StoreService.getStore().dispatch(TOGGLE_LOADING(loadingIdentifier));
	}
}

export default AjaxServiceWithLoading;
