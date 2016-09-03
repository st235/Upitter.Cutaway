'use strict';

import React from 'react';
import cn from 'classnames';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class OptionalMenuButtonComponent extends BaseLayout {
	render() {
		const { shouldBeActive, onMenuOpened, postId } = this.props;
		const className = cn({
			'context-menu_btn': true,
			'context-menu_btn--active': shouldBeActive === postId
		});

		return (
			<div onClick={ onMenuOpened.bind(this, postId) } className={ className }><span></span></div>
		);
	}
}

export default OptionalMenuButtonComponent;


