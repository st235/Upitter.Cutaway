'use strict';

import StoreService from './storeService';
import LocaleService from './localeService';

import { ADD_ERROR, REMOVE_ERROR } from '../actions/errorActions';

import errorTypesConfig from '../config/errorTypes';
import errorListConfig from '../config/errorsList';

export default class ErrorService {
	static _getLocalizedErrorMessage(errorType) {
		const locale = LocaleService.getLocale();
		return errorListConfig[errorType][locale];
	}

	static _dispatchError(errorType, errorMessage) {
		StoreService.getStore().dispatch(ADD_ERROR(errorType, errorMessage));
		this.timeout = setTimeout(() => {
			this.removeError(errorType);
		}, 5000);
	}

	static generateStandardError() {
		this.setError(errorTypesConfig.UNKNOWN_ERROR);
	}

	static getError() {
		return StoreService.getStore().getState().error.get('currentError');
	}

	static setError(errorType) {
		const isSetErrorMessage = StoreService.getStore().getState().error.get(errorType);
		const message = this._getLocalizedErrorMessage(errorType);
		if (isSetErrorMessage) {
			clearTimeout(this.timeout);
		}
		this._dispatchError(errorType, message);
	}

	static removeError(errorType) {
		StoreService.getStore().dispatch(REMOVE_ERROR(errorType));
	}
}
