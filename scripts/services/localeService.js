'use strict';

import LocalStorageService from './localStorageService';

export default class LocaleService {
	static init(language) {
		if (language) return this.setLocale(language);
		const intermidiateLanguageState = window.navigator.language || window.navigator.browserLanguage;
		if (!intermidiateLanguageState) return LocalStorageService.set('ln', 'en');
		const isRussian = ~intermidiateLanguageState.indexOf('ru');
		if (isRussian) return LocalStorageService.set('ln', 'ru');
		return LocalStorageService.set('ln', 'en');
	}

	static setLocale(language) {
		return LocalStorageService.set('ln', language);
	}

	static getLocale() {
		return LocalStorageService.get('ln');
	}
}
