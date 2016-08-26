'use strict';

import React from 'react';

import BaseLayout from '../../baseLayout/baseLayout';
import Gallery from './gallery/galleryComponent';
import PostCompanyInfo from './postCompanyInfo/postCompanyInfoComponent';
import OptionalMenuButton from './optionalMenuButton/optionalMenuButtonComponent';
import OptionalMenu from './optionalMenu/optionalMenuComponent';

class PostComponent extends BaseLayout {
	onBind() {

	}

	onCreate() {

	}

	render() {
		const styles = {
			display: 'none'
		};
		return (
			<div className="post">
				<div className="post-header">
					<PostCompanyInfo />
					<div className="context-menu">
						<OptionalMenuButton />
						<OptionalMenu />
					</div>
				</div>
				<div className="post-content">
					<div className="post-content_title">
						Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
					</div>
					<div className="post-content_text">
						Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Заманивший буквенных коварный ручеек что деревни то города путь первую эта единственное, которой, строчка они, пояс lorem инициал на берегу рыбными!
					</div>
					<Gallery />
				</div>
				<div className="post-footer">
					<div className="category">
						<div className="category_icon category_icon--sales">
						</div>
						<div className="category_name">Скидки</div>
					</div>
					<div className="post-menu">
						<div className="post-menu_item">
							<div className="action-btn">
								<div className="action-icon action-icon--favorit"></div>
							</div>
						</div>
						<div className="post-menu_item">
							<div className="action-btn">
								<div className="action-icon action-icon--comment"></div>
								<div className="counter">5</div>
							</div>
						</div>
						<div className="post-menu_item">
							<div className="action-btn">
								<div className="action-icon action-icon--like"></div>
								<div className="counter">12</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PostComponent;


