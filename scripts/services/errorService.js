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
		const message = this._getLocalizedErrorMessage(errorTypesConfig.UNKNOWN_ERROR);
		this.setError(errorTypesConfig.UNKNOWN_ERROR, message);
	}
	static setError(errorType, errorMessage) {
		const isSetErrorMessage = StoreService.getStore().error.get(errorType);
		if (isSetErrorMessage) {
			clearTimeout(this.timeout);
		}
		this._dispatchError(errorType, errorMessage);
	}
	static removeError(errorType) {
		StoreService.getStore().dispatch(REMOVE_ERROR(errorType));
	}
}
