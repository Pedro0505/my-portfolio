import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import bodySelector from '../services/selector';

export const NavBarContext = createContext();

export function NavBarProvider({ children }) {
  const [toggleNav, setToogleNav] = useState('hide');
  const [renderLinks, setRenderLinks] = useState('mount');

  function unmountLinks() {
    if (window.innerWidth < 794) return setRenderLinks('unmount');
    return setRenderLinks('mount');
  }

  useEffect(() => {
    unmountLinks();
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
    window.scrollTo(0, 0);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 794) {
      setToogleNav('hide');
    }
  });

  window.addEventListener('resize', unmountLinks);

  const context = {
    toggleNav, toogleAppears, handleClick, renderLinks,
  };

  return (
    <NavBarContext.Provider value={context}>
      { children }
    </NavBarContext.Provider>
  );
}

NavBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
