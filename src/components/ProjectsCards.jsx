import React from 'react';
import PropTypes from 'prop-types';
import CardsNavegation from './CardsNavegation';

function ProjectsCards({ title, image, content }) {
  return (
    <section className="cards-projects">
      <h1 className="title-project">{title}</h1>
      <img src={ image } alt="Imagem do projeto" />
      <p className="project-description">{content}</p>
      <CardsNavegation image={ image } />
    </section>
  );
}

ProjectsCards.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectsCards;
