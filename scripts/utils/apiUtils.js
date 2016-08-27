'use strict';

import AjaxService from '../services/ajaxServiceWithLoading';

import methodsConfig from '../config/methods';

export default {
	getCompanyInfo(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'ADD_COMPANY');
	},

	getComments(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'GET_COMMENTS');
	},

	subscribe(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'SUBSCRIBE');
	},

	like(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'LIKE');
	},

	comment(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'COMMENT');
	},

	authorizeWithTwitter(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'AUTHORIZE_WITH_TWITTER');
	},

	authorizeWithFacebook(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'AUTHORIZE_WITH_FACEBOOK');
	},

	authorizeWithVk(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'AUTHORIZE_WITH_VKONTAKTE');
	},

	authorizeWithGPlus(alias) {
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'AUTHORIZE_WITH_GOOGLE+');
	},

	// TODO: IMPLEMENT

	search(query) {}
};
