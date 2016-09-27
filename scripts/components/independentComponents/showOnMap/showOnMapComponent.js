'use strict';

import React from 'react';
import Modal from 'react-modal';
import Map from 'google-map-react';

import BaseLayout from '../../baseLayout/baseLayout';
import Marker from './showOnMapMarkerComponent';

import { CLOSE_SHOW_ON_MAP } from '../../../actions/showOnMapActions';

class SubscribeButtonComponent extends BaseLayout {
	onBind() {
		this.closeModal = this.closeModal.bind(this);
	}

	onCreate() {

	}

	closeModal() {
		this.store.dispatch(CLOSE_SHOW_ON_MAP());
	}

	render() {
		let { longitude, latitude, icon, show } = this.props;
		const style = { backgroundImage: `url('${icon}')` };

		if (!show) return null;

		if (latitude) latitude = parseFloat(latitude);
		if (longitude) longitude = parseFloat(longitude);
		console.log([ latitude, longitude ]);

		return (
			<Modal isOpen={ show } >
				<div onClick={ this.closeModal }>X</div>

				<Map
					apiKey={ 'AIzaSyADqQFjA83Se2Nu-TvB7D9NWqJc68IGZCc' }
					center={ [latitude, longitude] }
					zoom={ 9 }
				>
					<Marker styles={ style } lat={ latitude } lng={ longitude } />
				</Map>
			</Modal>
		);
	}
}

export default SubscribeButtonComponent;

