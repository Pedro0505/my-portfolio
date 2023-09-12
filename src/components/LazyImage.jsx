import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function LazyImage({ src, alt, width, height, style }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return (
    imageLoaded ? <img src={src} alt={alt} width={width} /> : <div className="loading" style={{ width, height, ...style }} />
  );
}

LazyImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.shape({}),
};

LazyImage.defaultProps = {
  width: '',
  height: '',
  style: {},
};

export default LazyImage;
