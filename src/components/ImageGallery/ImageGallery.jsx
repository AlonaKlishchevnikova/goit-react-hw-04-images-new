import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'


import styles from "./image-gallery.module.css"

const ImageGallery = ({images, showImage }) => (
  <section>
    <ul className={styles.ImageGallery}>

      {images.map(({id, webformatURL, largeImageURL, tags}) => (
          <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
         showImage={showImage}
        />
      ))}
    </ul>
  </section>
);


ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  showImage: PropTypes.func.isRequired,
};

export default ImageGallery;