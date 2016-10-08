import StoreService from '../services/storeService';
import { TOGGLE_UNAUTHORIZED } from '../actions/unauthorizedActions';

export default {
	showUnaothorized() {
		StoreService.getStore().dispatch(TOGGLE_UNAUTHORIZED());
	}
}