import _ from 'underscore';

export default class ReportsService {
	static init(reasons) {
		this.reasons = reasons;
		this._sortReports(reasons);
	}

	static _sortReports(reasons) {
		this.postReasons = [];
		this.companyReasons = [];
		this.commentReasons = [];

		_.forEach(reasons, reason => {
			switch (reason.type) {
			case 'post':
				this.postReasons.push(reason);
				break;
			case 'company':
				this.companyReasons.push(reason);
				break;
			case 'comment':
				this.commentReasons.push(reason);
				break;
			}
		});
	}

	static get allReasons() {
		return this.reasons;
	}

	static getPostReasons() {
		return this.postReasons;
	}

	static getCommentReasons() {
		return this.commentReasons;
	}

	static getCompanyReasons() {
		return this.companyReasons;
	}
}