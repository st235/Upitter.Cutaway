'use strict';

import React from 'react';
import Modal from 'react-modal';

import BaseLayout from '../../baseLayout/baseLayout';
import { baseServerUrl } from '../../../config/http';

class ProfileContent extends BaseLayout {

	render() {
		const { showUnauthorized, closeModal } = this.props;

		if (!showUnauthorized) return null;

		return (
			<Modal isOpen={ showUnauthorized } overlayClassName="modal-overlay" className="modal-standart" >
				<div className="modal-header">
					<div className="modal-title">Войти</div>
					<div className="modal-close" onClick={ closeModal }></div>
				</div>

				<div className="group-btn social-btn">
					<a href="http://62.76.179.37:8003/authorization/twitter/web" className="btn btn-block social-icon social-icon--twitter">Twitter</a>
					<a href="http://62.76.179.37:8003/authorization/vk/web" className="btn btn-block social-icon social-icon--vk">Vk</a>
					<a href="http://62.76.179.37:8003/authorization/facebook/web" className="btn btn-block social-icon social-icon--facebook">Facebook</a>
					<a href="http://62.76.179.37:8003/authorization/google/web" className="btn btn-block social-icon social-icon--google">Google</a>
				</div>
			</Modal>
		);
	}
}

export default ProfileContent;

// <Modal isOpen={ showUnauthorized } >
// 	<span onClick={ closeModal }>ЗАКРЫТЬ МОДАЛКУ</span>
// 	<h1>Для того, чтобы подписаться, лайкнуть или репостнуть запись, необходимо авторизоваться</h1>
// 	<p>Авторизоваться через:</p>
// 	<div>
// 		<FacebookLogin
// 			appId={ socialConfig.auth.facebook.appId }
// 			autoLoad={ true }
// 			fields="name"
// 			onClick={console.log}
// 			callback={console.log} />
// 	</div>
// 	<div><button>TWITTER</button></div>
// 	<div>
// 		<GoogleLogin
// 			clientId={ socialConfig.auth.google.clientId }
// 			buttonText="Google"
// 			onSuccess={console.log}
// 			onFailure={console.log}
// 		/>
// 	</div>
// 	<div>
// 		<VkLogin appId={ "5624119" } autoLoad={ true }
// 		         callback={ () => {
// 					console.log(window.VK);
// 					} }/>
// 	</div>
// </Modal>