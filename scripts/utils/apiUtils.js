'use strict';

import AjaxService from '../services/ajaxServiceWithLoading';

import methodsConfig from '../config/methods';

export default {
	getCompanyInfo(companyName) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}${companyName}`, {});
	}
}