'use strict';

import React from 'react';
import Modal from 'react-modal';

import BaseLayout from '../baseLayout/baseLayout';

class ProfileContent extends BaseLayout {

	render() {
		const { showUnauthorized } = this.props;

		return (
			<Modal isOpen={ showUnauthorized } >
				<h1>ВЫ НЕ АВТОРИЗОВАНЫ</h1>
				<p>Авторизоваться через:</p>
				<div><button>FACEBOOK</button></div>
				<div><button>TWITTER</button></div>
				<div><button>GOOGLE+</button></div>
				<div><button>VKONTAKTE</button></div>
			</Modal>
		);
	}
}

export default ProfileContent;
