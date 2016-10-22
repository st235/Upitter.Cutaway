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
		let { longitude, latitude, icon, text, show } = this.props;
		const style = { backgroundImage: `url('${icon}')` };

		if (!show) return null;

		if (latitude) latitude = parseFloat(latitude);
		if (longitude) longitude = parseFloat(longitude);

		return (
			<Modal isOpen={ show } overlayClassName="modal-overlay" className="modal-for-map" >
				<div className="modal-header">
					<div className="modal-title">Показать на карте</div>
					<div className="modal-close" onClick={ this.closeModal }></div>
				</div>
				<div className="modal-content">
					<Map
						bootstrapURLKeys={{ key: 'AIzaSyACh3vVbMrtOHXwXmlDdk46h7wOi2TIsDE' }}
						center={ [latitude, longitude] }
						zoom={ 15 }
						className="modal-map">
						<Marker styles={ style } lat={ latitude } lng={ longitude } text={ text } />
					</Map>
				</div>
			</Modal>
		);
	}
}

export default SubscribeButtonComponent;


