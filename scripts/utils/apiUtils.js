'use strict';

import AjaxService from '../services/ajaxServiceWithLoading';
import ErrorService from '../services/errorService';

import methodsConfig from '../config/methods';
import errorTypesConfig from '../config/errorTypes';

export default {
	getCompanyInfo(alias) {
		console.log(alias);
		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, {}, 'ADD_COMPANY').then(result => {
			if (!result) ErrorService.setError(errorTypesConfig.GET_COMPANY_INFO_ERROR);
			return result;
		});
	},

	getCategoryNames(activity) {
		return AjaxService.sendPost(`${methodsConfig.category.obtainTitles}`, { activity }, 'GET_CATEGORY_TITLES').then(result => {
			if (!result) ErrorService.setError(errorTypesConfig.GET_CATEGORY_TITLES);
			return result;
		});
	},

	getPosts(alias, postId, type = 'old') {
		return AjaxService.sendGet(`${methodsConfig.post.obtainByAlias}/${type}`, { alias, postId }, 'GET_POSTS').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.GET_POSTS_ERROR);
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

	authorizeWithVkApi() {
		return AjaxService.sendGet(methodsConfig.external.vk, {}, 'AUTHORIZE_WITH_VK').then(result => {
			console.log(result);
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
