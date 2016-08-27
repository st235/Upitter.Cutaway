'use strict';

import React from 'react';
import cn from 'classnames';

import BaseLayout from '../baseLayout/baseLayout';

class ErrorMessageComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const { currentError } = this.store.getState().error.get('currentError');
		const errorClass = cn({ errorMessage: true, errorMessageIsShown: currentError });
		return (
			<div className={ errorClass }>
				{ currentError }
			</div>
		);
	}
}

export default ErrorMessageComponent;
