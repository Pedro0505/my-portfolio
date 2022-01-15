import React, { useEffect, useState } from 'react';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ProjectsInfo from '../assets/ProjectsInfo';
import ProjectsCards from '../components/ProjectsCards';
import '../style/Project.css';

function Projects() {
  const initialPercentage = 0.50;
  const margin = 60;
  const cardWidth = 380;
  const listWidth = ProjectsInfo.length * cardWidth;
  const [move, setMove] = useState(0);
  const [percentage, setPercentage] = useState(initialPercentage);

  function scrollListLeft() {
    let scrollLeft = move - Math.round(window.innerWidth * percentage);
    if (scrollLeft <= 0) {
      scrollLeft = 0;
    }
    const element = document.querySelector('.carousel');
    setMove(scrollLeft);
    element.scrollTo(scrollLeft, 0);
  }

  function scrollListRigth() {
    let scrollRigth = move + Math.round(window.innerWidth * percentage);
    if ((listWidth - window.innerWidth) < scrollRigth) {
      scrollRigth = (listWidth - window.innerWidth) + margin;
    }
    const element = document.querySelector('.carousel');
    setMove(scrollRigth);
    element.scrollTo(scrollRigth, 0);
  }

  window.addEventListener('resize', () => {
    const newPercentage = 0.80;
    const screen = 800;
    if (window.innerWidth < screen) return setPercentage(newPercentage);
    setPercentage(initialPercentage);
  });

  useEffect(() => {
    const element = document.querySelector('.carousel');
    element.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-project-container">
      <section className="title-container">
        <h1 className="text-typing"> Projetos </h1>
      </section>
      <section className="carousel">
        <section className="cards-containers">
          {
            move !== 0 && (
              <button
                type="button"
                className="arrow-left"
                onClick={ scrollListLeft }
              >
                <ArrowBackIos style={ { color: 'white' } } />
              </button>
            )
          }
          {
            (listWidth - window.innerWidth) + margin !== move && (
              <button
                type="button"
                className="arrow-rigth"
                onClick={ scrollListRigth }
              >
                <ArrowForwardIos style={ { color: 'white' } } />
              </button>
            )
          }
          {
            ProjectsInfo.map(({ id, title, image, content }) => (
              <ProjectsCards
                key={ id }
                title={ title }
                image={ image }
                content={ content }
              />
            ))
          }
        </section>
      </section>
    </main>
  );
}

export default Projects;
