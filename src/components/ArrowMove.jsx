import React, { useContext, useEffect, useState } from 'react';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { LanguageContext } from '../context/LanguageContext';

function ArrowMove() {
  const initialPercentage = 0.50;
  const { language, Translation } = useContext(LanguageContext);
  const { project } = Translation[language];
  const [move, setMove] = useState(0);
  const [percentage, setPercentage] = useState(initialPercentage);
  const margin = 60;
  const cardWidth = 450;
  const listWidth = project.length * cardWidth;

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
    <>
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
    </>
  );
}

export default ArrowMove;
