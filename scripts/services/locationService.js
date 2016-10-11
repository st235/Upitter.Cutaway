import { browserHistory } from 'react-router';

import LocalStorageService from './localStorageService';

export default class LocationService {
	static init() {}

	static hasPreviousPath() {
		return LocalStorageService.get('previousPath');
	}

	static setPreviousPath(previousPath) {
		LocalStorageService.set('previousPath', previousPath);
	}

	static goToCompany() {
		browserHistory.push(LocalStorageService.get('previousPath'));
	}

	static goToMain() {
		browserHistory.push('/');
	}

	static goToFailureCallback() {
		browserHistory.push('/authorization/failure');
	}
}