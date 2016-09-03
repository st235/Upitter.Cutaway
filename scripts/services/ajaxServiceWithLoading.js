'use strict';

import AjaxService from './ajaxService';
import StoreService from './storeService';
import ErrorService from './errorService';
import LocaleService from './localeService';

import { TOGGLE_LOADING } from '../actions/loadingActions';

class AjaxServiceWithLoading extends AjaxService {
	static sendPost(url, body = {}, loadingIdentifier) {
		this._toggleLoading(loadingIdentifier);
		body.ln = LocaleService.getLocale();
		return super.sendPost(url, body).then(result => {
			this._toggleLoading(loadingIdentifier);
			return result;
		}).catch(() => {
			this._toggleLoading(loadingIdentifier);
			ErrorService.generateStandardError();
		});
	}

	static sendGet(url, query = {}, loadingIdentifier) {
		this._toggleLoading(loadingIdentifier);
		query.ln = LocaleService.getLocale();
		return super.sendGet(url, query).then(result => {
			this._toggleLoading(loadingIdentifier);
			return result;
		}).catch(() => {
			this._toggleLoading(loadingIdentifier);
			ErrorService.generateStandardError();
		});
	}

	static _toggleLoading(loadingIdentifier) {
		StoreService.getStore().dispatch(TOGGLE_LOADING(loadingIdentifier));
	}
}

export default AjaxServiceWithLoading;
