import PropTypes from 'prop-types';
import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import GitHubIcon from '@material-ui/icons/GitHub';

function CardsNavegation({ repository, deploy }) {
  return (
    <nav className="container-icons">
      <a
        href={ repository }
        target="_blank"
        rel="noreferrer"
        className="icons-projects"
        title="Ir para o repositório do projeto"
      >
        <GitHubIcon style={ { fontSize: '2.5em' } } />
      </a>
      <a
        href={ deploy }
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
  repository: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
};

export default CardsNavegation;
