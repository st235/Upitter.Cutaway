'use strict';

import React from 'react';
import BaseLayout from '../../../../baseLayout/baseLayout';

import { OPEN_SHOW_ON_MAP } from '../../../../../actions/showOnMapActions';

class ShowOnMapButtonComponent extends BaseLayout {
	onBind() {
		this.showOnMap = this.showOnMap.bind(this);
	}

	onCreate() {

	}

	showOnMap() {
		const { company } = this.store.getState();
		const coordinates = company.coordinates[0];
		const { latitude, longitude } = coordinates;
		const icon = company.logoUrl;

		this.store.dispatch(OPEN_SHOW_ON_MAP(latitude, longitude, icon));
	}

	render() {
		const { company } = this.store.getState();

		if (
			!company
			|| !company.coordinates
			|| !company.coordinates.length
			|| !company.coordinates[0].latitude
			|| !company.coordinates[0].longitude
		) {
			return null;
		}

		// TODO: Сделать, чтобы работало с разными точками

		return (
			<div className="profile-map">
				<div onClick={ this.showOnMap } className="btn btn--line btn--icon-map">
					Показать на карте
				</div>
			</div>
		);
	}
}

export default ShowOnMapButtonComponent;
