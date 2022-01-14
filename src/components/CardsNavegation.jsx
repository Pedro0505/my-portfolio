/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import PropTypes from 'prop-types';
import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import GitHubIcon from '@material-ui/icons/GitHub';

function CardsNavegation({ image }) {
  return (
    <nav className="container-icons">
      <a
        href={ image }
        target="_blank"
        rel="noreferrer"
        className="icons-projects"
        title="Ir para o repositório do projeto"
      >
        <GitHubIcon style={ { fontSize: '2.5em' } } />
      </a>
      <a
        href={ image }
        target="_blank"
        rel="noreferrer"
        className="icons-projects"
        title="Ir para o deploy"
      >
        <ArrowForwardIcon style={ { fontSize: '2.5em' } } />
      </a>
    </nav>
  );
}

CardsNavegation.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CardsNavegation;
