import { createStore } from 'redux';
import reducers from '../reducers/indexReducer';

export default class StoreService {
	static init(renderTree) {
		this.store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
		this.store.subscribe(renderTree);
	}

	static getStore() {
		return this.store;
	}
}
