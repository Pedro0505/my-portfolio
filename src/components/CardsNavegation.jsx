import PropTypes from 'prop-types';
import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import GitHubIcon from '@material-ui/icons/GitHub';

function CardsNavegation({ repository, deploy, textDeploy, textRepository }) {
  return (
    <nav className="container-icons">
      <div className="icon-content">
        <a
          href={ repository }
          target="_blank"
          rel="noreferrer"
          className="icons-projects"
        >
          <GitHubIcon className="icon" style={ { fontSize: '2.5em' } } />
        </a>
        <a href={ repository } target="_blank" rel="noreferrer">
          {textRepository}
        </a>
      </div>

      <div className="icon-content">
        <a
          href={ deploy }
          target="_blank"
          rel="noreferrer"
          className="icons-projects"
        >
          <ArrowForwardIcon className="icon" style={ { fontSize: '2.5em' } } />
        </a>
        <a href={ deploy } target="_blank" rel="noreferrer">
          {textDeploy}
        </a>
      </div>
    </nav>
  );
}

CardsNavegation.propTypes = {
  repository: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  textRepository: PropTypes.string.isRequired,
  textDeploy: PropTypes.string.isRequired,
};

export default CardsNavegation;
