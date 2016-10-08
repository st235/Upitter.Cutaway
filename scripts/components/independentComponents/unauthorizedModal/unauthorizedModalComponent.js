'use strict';

import React from 'react';
import Modal from 'react-modal';

import BaseLayout from '../../baseLayout/baseLayout';

class ProfileContent extends BaseLayout {

	render() {
		const { showUnauthorized, closeModal } = this.props;

		if (!showUnauthorized) return null;

		return (
			<Modal isOpen={ showUnauthorized } >
				<span onClick={ closeModal }>ЗАКРЫТЬ МОДАЛКУ</span>
				<div><button><a href="http://localhost:5000/authorization/twitter/web">Twitter</a></button></div>
				<div><button><a href="http://localhost:5000/authorization/vk/web">Vk</a></button></div>
				<div><button><a href="http://localhost:5000/authorization/facebook/web">Facebook</a></button></div>
				<div><button><a href="http://localhost:5000/authorization/google/web">Google</a></button></div>
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