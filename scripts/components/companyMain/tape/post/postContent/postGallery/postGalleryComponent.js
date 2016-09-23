'use strict';

import React from 'react';
import PhotoGallery from 'react-justified-gallery';

import BaseLayout from '../../../../../baseLayout/baseLayout';

class GalleryComponent extends BaseLayout {
	onBind() {
		this.createGalleryInput = this.createGalleryInput.bind(this);
		this.generateSingleImageInput = this.generateSingleImageInput.bind(this);
	}

	createGalleryInput() {
		const { images } = this.props;
		const result = [];

		images.forEach(image => {
			result.push(this.generateSingleImageInput(image));
		});

		return result;
	}

	generateSingleImageInput(image) {
		const width = image.get('width');
		const height = image.get('height');
		const aspectRatio = image.get('aspectRatio');
		const imageMainUrl = image.get('originalUrl');
		const thumbnailUrl = image.get('thumbUrl');

		return {
			imageMainUrl,
			thumbnailUrl,
			dimensions: {
				width,
				height
			}
		};
	}

	render() {
		const { images } = this.props;
		const options = {
			boxClass: 'justified-layout-box--custom',
			containerClass: 'justified-layout-container--custom',
			containerWidth: 500,
			boxSpacing: 5,
			targetRowHeight: 160,
			shouldDisplayLightbox: true,
			lightboxOptions: {
				clickOutsideToClose: true,
				enableZoom: true,
				animationDisabled: false,
				imagePadding: 50,
			},
			targetRowHeightTolerance: 0.25,
		};

		if (!images) return null;

		const customizedImages = this.createGalleryInput();

		switch(customizedImages.length) {
			case 1:
				options.targetRowHeight = options.targetRowHeight * 3;
				options.maxNumRows = 1;
				break;
			case 2:
				options.targetRowHeight = options.targetRowHeight * 2;
				options.maxNumRows = 2;
				break;
			case 3:
				options.targetRowHeight = options.targetRowHeight * 1.5;
				options.targetRowHeightTolerance = 0.25;
				options.maxNumRows = 2;
				break;
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				options.targetRowHeight = options.targetRowHeight * 1.5;
				options.maxNumRows = 3;
				break;
			case 10:
				options.targetRowHeight = options.targetRowHeight * 1.5;
				options.maxNumRows = 4;
				break;
		}

		const style = {
			width: 500,
		};

		return (
			<div style={ style } >
				<PhotoGallery
					images={ customizedImages }
					options={ options }
				/>
			</div>
		);
	}
}

export default GalleryComponent;
