import request from 'superagent';

export default class AjaxService {

	static sendPost(url, obj) {
		return new Promise((resolve, reject) => {
			request
				.post(url)
				.send(obj)
				.end((error, res) => {
					if (!res || !res.text) return reject("Неизвестная ошибка сервера");
					resolve(JSON.parse(res.text));
				});
		});
	}

	static sendGet(url, obj) {
		return new Promise((resolve, reject) => {
			request
				.get(url)
				.query(obj)
				.end((error, res) => {
					if (!res || !res.text) return reject(null);
					resolve(JSON.parse(res.text));
				});
		});
	}

	static sendRequest(options) {
		options = this._getFormData(options);
		const { method, url, queryFields, formData } = options;

		return new Promise((resolve, reject) => {
			request[method](url)
				.query(queryFields)
				.send(formData)
				.end((error, res) => {
					if (!res || !res.text) return reject("Неизвестная ошибка сервера");
					resolve(JSON.parse(res.text));
				});
		});
	}

	static _getFormData(options) {
		const { method, url, files, queryFields, bodyFields } = options;

		if (!method) throw new Error('Method not specified');
		if (!url) throw new Error('Url not specified');

		const formData = new FormData();

		if (files) {
			for (const key in files) {
				if (files.hasOwnProperty(key) && files[key] instanceof File) {
					formData.append(key, files[key]);
				}
			}
		}

		if (bodyFields) {
			for (const key in bodyFields) {
				if (bodyFields.hasOwnProperty(key)) {
					formData.append(key, bodyFields[key]);
				}
			}
		}

		return { method, url, queryFields, formData };
	}
}
