class LocalStorageService {
	static init() {
		this._localStorageAvailable = !!window.localStorage;
		if (!this._localStorageAvailable) throw new Error('Local storage is not supported. /Update your IE 8- /');
		this._storage = window.localStorage;
	}

	static set(namespace, value) {
		if (!this._localStorageAvailable) this.init();
		this._storage.setItem(namespace, JSON.stringify(value));
		return true;
	}

	static get(namespace) {
		if (!this._localStorageAvailable) this.init();
		return JSON.parse(this._storage.getItem(namespace));
	}

	static remove(namespace) {
		if (!this._localStorageAvailable) this.init();
		this._storage.removeItem(namespace);
		return true;
	}
}

export default LocalStorageService;
