import React from 'react';
import PropTypes from 'prop-types';
import CardsNavegation from './CardsNavegation';

function ProjectsCards({ title, image, content, repository, deploy, testId }) {
  return (
    <section className="cards-projects">
      <h1 className="title-project">{title}</h1>
      <img src={ image } alt="Imagem do projeto" />
      <p className="project-description" data-testid={ testId }>{content}</p>
      <CardsNavegation repository={ repository } deploy={ deploy } />
    </section>
  );
}

ProjectsCards.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default ProjectsCards;
