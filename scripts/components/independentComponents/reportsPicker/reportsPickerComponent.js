import React from 'react';
import Modal from 'react-modal';
import _ from 'underscore';

import BaseLayout from '../../../components/baseLayout/baseLayout';

class ReportsPickerComponent extends BaseLayout {
	onBind() {
		this.generateReasonsList = this.generateReasonsList.bind(this);
		this.createReport = this.createReport.bind(this);
	}

	onCreate() {
		this.state = {
			reason: null
		};
	}

	choseReason(reason) {
		console.log(reason);
		this.setState({ reason });
	}

	createReport() {
		const { createReport } = this.props;

		if (this.state.reason) {
			return createReport.bind(null, this.state.reason.customId);
		}
	}

	generateReasonsList() {
		const { reasons } = this.props;

		return _.map(reasons, (reason, index) => {
			return (
				<div className="radio" key={ index }>
					<label>
						<input
							onClick={ this.choseReason.bind(this, reason) }
							type="radio" value={ reason.customId }
							checked={ reason == this.state.reason }
						/>
						{ reason.title }
					</label>
				</div>
			);
		});
	}

	render() {
		const { closeModal } = this.props;

		return (
			<Modal isOpen={ true } overlayClassName="modal-overlay" className="modal-for-map" >
				<div className="modal-header">
					<div className="modal-title">{ this.localeService.getLocalizedNameFor('reportModalHeader') }</div>
					<div className="modal-close" onClick={ closeModal }></div>
				</div>
				<div className="modal-content">
						{ this.generateReasonsList() }
						<button onClick={ this.createReport() }>
							{ this.localeService.getLocalizedNameFor('reportButton') }
						</button>
				</div>
			</Modal>
		);
	}
}

export default ReportsPickerComponent;
