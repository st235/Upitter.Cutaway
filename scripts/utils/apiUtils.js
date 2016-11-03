'use strict';

import AjaxService from '../services/ajaxServiceWithLoading';
import ErrorService from '../services/errorService';
import UserService from '../services/userService';

import unauthorizedUtils from './unauthorizedUtils';

import methodsConfig from '../config/methods';
import errorTypesConfig from '../config/errorTypes';

export default {
	getCompanyInfo(alias) {
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
		const accessToken = UserService.getAccessToken();
		return AjaxService.sendGet(`${methodsConfig.post.obtainByAlias}/${type}`, { alias, postId, accessToken }, 'GET_POSTS').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.GET_POSTS_ERROR);
			return result;
		});
	},

	getComments(postId, commentId, type = 'old') {
		return AjaxService.sendGet(`${methodsConfig.comment.obtain}`, { postId, commentId }, 'GET_COMMENTS').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.GET_COMMENTS_ERROR);
			return result;
		});
	},

	getProfile(accessToken) {
		return AjaxService.sendGet(`${methodsConfig.user.profile}`, { accessToken }, 'GET_USER_PROFILE').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.GET_USER_PROFILE);
			return result;
		});
	},

	subscribe(companyId) {
		const accessToken = UserService.getAccessToken();
		if (!accessToken) return unauthorizedUtils.showUnauthorized();

		return AjaxService.sendGet(`${methodsConfig.user.toggleSubscription}/${companyId}`, { accessToken }, 'SUBSCRIBE').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.SUBSCRIBE_ERROR);
			return result;
		});
	},

	like(postId) {
		const accessToken = UserService.getAccessToken();
		if (!accessToken) return unauthorizedUtils.showUnauthorized();

		return AjaxService.sendGet(`${methodsConfig.post.like}/${postId}`, { accessToken }, 'LIKE').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.LIKE_ERROR);
			return result;
		});
	},

	addToFavorites(postId) {
		const accessToken = UserService.getAccessToken();
		if (!accessToken) return unauthorizedUtils.showUnauthorized();

		return AjaxService.sendGet(`${methodsConfig.post.favorite}/${postId}`, { accessToken }, 'ADD_TO_FAVORITES').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.FAVORITE_ERROR);
			return result;
		});
	},

	vote(postId, variantIndex) {
		const accessToken = UserService.getAccessToken();
		if (!accessToken) return unauthorizedUtils.showUnauthorized();

		return AjaxService.sendGet(`${methodsConfig.post.vote}/${postId}/${variantIndex}`, { accessToken }, 'VOTE').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.VOTE_ERROR);
			return result;
		});
	},

	comment(alias) {
		const accessToken = UserService.getAccessToken();
		if (!accessToken) return unauthorizedUtils.showUnauthorized();

		return AjaxService.sendGet(`${methodsConfig.company.findByAlias}/${alias}`, { accessToken }, 'COMMENT').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.COMMENT_ERROR);
			return result;
		});
	},

	createReport(reasonId, targetId) {
		return AjaxService.sendPost(`${methodsConfig.reports.create}`, { reasonId, targetId }, 'CREATE_REPORT').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.CREATE_REPORT);
			return result;
		});
	},

	getReportReasons(type = 'all') {
		return AjaxService.sendGet(`${methodsConfig.reports.obtainReasons}/${type}`, {}, 'GET_REASONS').then(result => {
			if (!result.success) ErrorService.setError(errorTypesConfig.UNKNOWN_ERROR);
			return result;
		});
	},

	// TODO: IMPLEMENT

	search(query) {}
};
