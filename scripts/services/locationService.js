import { browserHistory } from 'react-router';

export default class LocationService {
	static init() {
		this.previousPath = '';
	}

	static hasPreviousPath() {
		return this.previousPath;
	}

	static setPreviousPath(previousPath) {
		this.previousPath = previousPath;
	}

	static goToCompany() {
		browserHistory.push(this.previousPath);
	}

	static goToMain() {
		browserHistory.push('/');
	}

	static goToFailureCallback() {
		browserHistory.push('/authorization/failure');
	}
}