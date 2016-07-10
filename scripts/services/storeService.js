import { createStore } from 'redux';
import reducers from '../reducers/indexReducer';

export default class StoreService {
	static init(renderTree) {
		this.store = createStore(reducers);
		this.store.subscribe(renderTree);
	}

	static getStore() {
		return this.store;
	}
}