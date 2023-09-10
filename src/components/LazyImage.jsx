import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function LazyImage({ src, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <div className={`project-img ${imageLoaded ? 'loaded' : 'lazy-image'}`}>
      {imageLoaded ? <img src={src} alt={alt} /> : null}
    </div>
  );
}

LazyImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default LazyImage;
