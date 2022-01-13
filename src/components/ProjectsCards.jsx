import PropTypes from 'prop-types';
import React from 'react';

function ProjectsCards({ title, image, content }) {
  return (
    <section className="cards-projects">
      <h1 className="title-project">{title}</h1>
      <img src={ image } alt="Imagem do projeto" />
      <p className="project-description">{content}</p>
    </section>
  );
}

ProjectsCards.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectsCards;
