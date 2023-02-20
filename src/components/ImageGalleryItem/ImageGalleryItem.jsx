import React from 'react';
import PropTypes from 'prop-types';
import styles from './image-gallery-item.module.css';

const ImageGalleryItem=({ webformatURL, largeImageURL, tags, showImage })=> {
  return (
    <li className={styles.ImageGalleryItem}>
      <img className={styles.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        onClick={showImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  showImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

