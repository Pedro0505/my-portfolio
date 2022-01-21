import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import bodySelector from '../services/selector';

export const NavBarContext = createContext();

export function NavBarProvider({ children }) {
  const [toggleNav, setToogleNav] = useState('hide');
  const [renderLinks, setRenderLinks] = useState('mount');
  const SCREEN = 794;

  function unmountLinks() {
    if (window.innerWidth < SCREEN) return setRenderLinks('unmount');
    return setRenderLinks('mount');
  }

  useEffect(() => {
    unmountLinks();
    bodySelector([{ style: 'overflowY', value: 'visible' }]);
  }, []);

  function toogleAppears() {
    if (toggleNav === 'hide') {
      setToogleNav('show');
      bodySelector([{ style: 'overflowY', value: 'hidden' }]);
    } else {
      setToogleNav('hide');
      bodySelector([{ style: 'overflowY', value: 'visible' }]);
    }
  }

  function handleClick() {
    setToogleNav('hide');
    bodySelector([{ style: 'overflowY', value: 'visible' }]);
    window.scrollTo(0, 0);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > SCREEN) {
      setToogleNav('hide');
    }
  });

  window.addEventListener('resize', unmountLinks);

  const context = {
    toggleNav,
    toogleAppears,
    handleClick,
    renderLinks,
  };

  return (
    <NavBarContext.Provider value={ context }>
      { children }
    </NavBarContext.Provider>
  );
}

NavBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
