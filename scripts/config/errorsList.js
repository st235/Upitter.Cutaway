import errorTypesConfig from './errorTypes';

export default {
	[errorTypesConfig.UNKNOWN_ERROR]: {
		ru: 'Неизвестная ошибка',
		en: 'Unknown error'
	},

	[errorTypesConfig.GET_COMPANY_INFO_ERROR]: {
		ru: 'Компания с указанным алиасом не найден',
		en: 'Company with requested alias was not found'
	},

	[errorTypesConfig.GET_COMPANY_INFO_ERROR]: {
		ru: 'Не удалось получить список публикаций',
		en: 'Unable to get publications list'
	},

	[errorTypesConfig.GET_COMMENTS_ERROR]: {
		ru: 'Не удалось получить список комментариев',
		en: 'Unable to get comments list'
	},

	[errorTypesConfig.SUBSCRIBE_ERROR]: {
		ru: 'Не удалось подписаться на обновление',
		en: 'Unable to subscribe'
	},

	[errorTypesConfig.LIKE_ERROR]: {
		ru: 'Не удалось оценить запись',
		en: 'Unable to rate publication'
	},

	[errorTypesConfig.UNABLE_TO_AUTHORIZE]: {
		ru: 'Не удалось авторизоваться',
		en: 'Unable to authorize'
	}
};
