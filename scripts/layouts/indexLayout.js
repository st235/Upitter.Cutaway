import React from 'react';

import BaseLayout from '../components/baseLayout/baseLayout';
import Loading from '../components/independentComponents/loading/loadingComponent';
import UnauthorizedModal from '../components/independentComponents/unauthorizedModal/unauthorizedModalComponent';
import ErrorMessage from '../components/independentComponents/errorMessage/errorMessageComponent';
import ShowOnMap from '../components/independentComponents/showOnMap/showOnMapComponent';
import ReportPicker from '../components/independentComponents/reportsPicker/reportsPickerComponent';

import Unauthorized from '../components/independentComponents/unauthorizedModal/unauthorizedModalComponent';

import { TOGGLE_MENU_OPENED } from '../actions/optionalMenuActions';
import { TOGGLE_UNAUTHORIZED } from '../actions/unauthorizedActions';
import { TOGGLE_REPORT_DIALOG } from '../actions/reportsActions';

export default class IndexLayout extends BaseLayout {
	onBind() {
		this.disableAllOptionalMenus = this.disableAllOptionalMenus.bind(this);
		this.closeUnauthorized = this.closeUnauthorized.bind(this);
		this.createReport = this.createReport.bind(this);
		this.closeReportModal = this.closeReportModal.bind(this);
	}

	closeUnauthorized() {
		this.store.dispatch(TOGGLE_UNAUTHORIZED());
	}

	disableAllOptionalMenus() {
		this.store.dispatch(TOGGLE_MENU_OPENED());
	}

	createReport(targetId, reasonId, e) {
		if (e) e.preventDefault();
		this.request.createReport(reasonId, targetId).then(() => {
			this.store.dispatch(TOGGLE_REPORT_DIALOG());
		});
	}

	closeReportModal() {
		this.store.dispatch(TOGGLE_REPORT_DIALOG());
	}

	render() {
		const { children } = this.props;
		const { loading, unauthorized, showOnMap, report } = this.store.getState();

		return (
			<div onClick={ this.disableAllOptionalMenus }>
				<Unauthorized />
				<Loading shouldBeShown={ loading.isShown } />
				<ErrorMessage />
				<UnauthorizedModal showUnauthorized={ unauthorized.show } closeModal={ this.closeUnauthorized } />
				<ShowOnMap
					show={ showOnMap.show }
					latitude={ showOnMap.latitude }
					longitude={ showOnMap.longitude }
					icon={ showOnMap.icon }
					text={ showOnMap.text }
				/>
				{
					report
					?
					<ReportPicker
						closeModal={ this.closeReportModal }
						createReport={ this.createReport.bind(this, report.get('customId')) }
						reasons={ this.reportsService.getPostReasons() }
					/>
					:
					null
				}
				{ children }
			</div>
		);
	}
}
