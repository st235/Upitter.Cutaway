import StoreService from '../services/storeService';
import { TOGGLE_UNAUTHORIZED } from '../actions/unauthorizedActions';

export default {
	showUnauthorized() {
		StoreService.getStore().dispatch(TOGGLE_UNAUTHORIZED());
	}
}