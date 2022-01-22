/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import GitHubIcon from '@material-ui/icons/GitHub';

function CardsNavegation({ repository, deploy }) {
  const [textGit, setTextGit] = useState('');
  const [textRepo, setTextRepo] = useState('');

  return (
    <nav className="container-icons">
      <a
        href={ repository }
        target="_blank"
        rel="noreferrer"
        className="icons-projects"
        onMouseEnter={ () => setTextGit('Ir para o repositório do projeto') }
        onMouseLeave={ () => setTextGit('') }
      >
        { textGit !== '' ? textGit : <GitHubIcon style={ { fontSize: '2.5em' } } /> }
      </a>
      <a
        href={ deploy }
        target="_blank"
        rel="noreferrer"
        className="icons-projects"
        onMouseEnter={ () => setTextRepo('Ir para o deploy') }
        onMouseOut={ () => setTextRepo('') }
      >
        { textRepo !== '' ? textRepo : (
          <ArrowForwardIcon style={ { fontSize: '2.5em' } } />
        )}
      </a>
    </nav>
  );
}

CardsNavegation.propTypes = {
  repository: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
};

export default CardsNavegation;
