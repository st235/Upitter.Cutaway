'use strict';

import AjaxService from '../services/ajaxServiceWithLoading';
import ErrorService from '../services/errorService';

import methodsConfig from '../config/methods';
import errorTypesConfig from '../config/errorTypes';

export default {
	getCompanyInfo(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'ADD_COMPANY').then(result => {
			if (!result) ErrorService.setError(errorTypesConfig.GET_COMPANY_INFO_ERROR);
			return result;
		});
	},

	getComments(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'GET_COMMENTS').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.GET_COMMENTS_ERROR);
			return result;
		});
	},

	subscribe(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'SUBSCRIBE').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.SUBSCRIBE_ERROR);
			return result;
		});
	},

	like(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'LIKE').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.LIKE_ERROR);
			return result;
		});
	},

	comment(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'COMMENT').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.COMMENT_ERROR);
			return result;
		});
	},

	authorizeWithTwitter(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'AUTHORIZE_WITH_TWITTER').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.UNABLE_TO_AUTHORIZE);
			return result;
		});
	},

	authorizeWithFacebook(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'AUTHORIZE_WITH_FACEBOOK').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.UNABLE_TO_AUTHORIZE);
			return result;
		});
	},

	authorizeWithVk(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'AUTHORIZE_WITH_VKONTAKTE').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.UNABLE_TO_AUTHORIZE);
			return result;
		});
	},

	authorizeWithGPlus(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'AUTHORIZE_WITH_GOOGLE+').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.UNABLE_TO_AUTHORIZE);
			return result;
		});
	},

	// TODO: IMPLEMENT

	search(query) {}
};
