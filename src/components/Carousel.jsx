import PropTypes from 'prop-types';
import React from 'react';
import ArrowMove from './ArrowMove';

function Carousel({ children }) {
  return (
    <section className="carousel">
      <section className="cards-containers">
        <ArrowMove />
        { children }
      </section>
    </section>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;
