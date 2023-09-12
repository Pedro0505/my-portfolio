import React from 'react';
import PropTypes from 'prop-types';
import CardsNavegation from './CardsNavegation';
import LazyImage from './LazyImage';

function ProjectsCards(
  { title, image, content, dislable,
    repository, deploy, testId, textDeploy, textRepository },
) {
  return (
    <section className="cards-projects">
      <h1 className="title-project">{title}</h1>
      <LazyImage src={image} alt="Imagem do projeto" width="100%" height="180px" style={{ marginBottom: '20px' }} />
      <p className="project-description" data-testid={ testId }>{content}</p>
      <CardsNavegation
        repository={ repository }
        deploy={ deploy }
        textDeploy={ textDeploy }
        textRepository={ textRepository }
        dislable={ dislable }
      />
    </section>
  );
}

ProjectsCards.defaultProps = {
  dislable: false,
};

ProjectsCards.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  textDeploy: PropTypes.string.isRequired,
  textRepository: PropTypes.string.isRequired,
  dislable: PropTypes.bool,
};

export default ProjectsCards;
