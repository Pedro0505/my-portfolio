import PropTypes from 'prop-types';
import React from 'react';
import ArrowMove from './ArrowMove';

function Carousel({ children }) {
  const cardWidth = 450;
  return (
    <section className="carousel">
      <section className="cards-containers">
        { children.length * cardWidth >= window.innerWidth && <ArrowMove /> }
        { children }
      </section>
    </section>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;
