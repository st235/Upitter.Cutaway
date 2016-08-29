'use strict';

import React from 'react';
import cn from 'classnames';

import BaseLayout from '../baseLayout/baseLayout';
import ErrorService from '../../services/errorService';

class ErrorMessageComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const currentError = ErrorService.getError();
		const errorClass = cn({ errorMessage: true, errorMessageIsShown: currentError });
		
		return (
			<div className={ errorClass }>
				{ currentError }
			</div>
		);
	}
}

export default ErrorMessageComponent;
