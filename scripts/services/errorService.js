'use strict';

import StoreService from 'storeService';

import { ADD_ERROR, REMOVE_ERROR } from '../actions/errorActions';

export default class ErrorService {
	static generateStandardError(ln) {
		if (ln === 'ru') throw 'Внутренняя ошибка сервера';
		throw 'Internal server error';
	}
	static setError(errorType, errorMessage) {
		StoreService.getStore().dispatch(ADD_ERROR(errorType, errorMessage));
	}
	static removeError(errorType) {
		StoreService.getStore().dispatch(REMOVE_ERROR(errorType));
	}
}
