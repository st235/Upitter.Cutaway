'use strict';

import React from 'react';
import cn from 'classnames';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class PostCategory extends BaseLayout {
	render() {
		const { category = 'sales' } = this.props;
		const categoryIconClass = cn({
			'category_icon': true,
			[`category_icon--${category}`]: true
		});
		let categoryName;
		switch (category) {
			case 'discount':
				categoryName = 'categoryDiscount';
				break;
			case 'events':
				categoryName = 'categoryEvents';
				break;
			case 'sales':
				categoryName = 'categorySales';
				break;
			case 'hires':
				categoryName = 'categoryHires';
				break;
			case 'news':
				categoryName = 'categoryNews';
				break;
			case 'services':
				categoryName = 'categoryServices';
				break;
			case 'special':
				categoryName = 'categorySpecial';
				break;
			case 'скидки':
				categoryName = 'categoryDiscount';
				break;
			case 'события':
				categoryName = 'categoryEvents';
				break;
			case 'распродажи':
				categoryName = 'categorySales';
				break;
			case 'вакансии':
				categoryName = 'categoryHires';
				break;
			case 'новости':
				categoryName = 'categoryNews';
				break;
			case 'услуги':
				categoryName = 'categoryServices';
				break;
			case 'особое':
				categoryName = 'categorySpecial';
				break;
		}

		return (
			<div className="category">
				<div className={ categoryIconClass }>
				</div>
				<div className="category_name">{ this.localeService.getLocalizedNameFor(categoryName) }</div>
			</div>
		);
	}
}

export default PostCategory;


