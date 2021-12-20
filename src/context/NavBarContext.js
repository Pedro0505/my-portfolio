import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const NavBarContext = createContext();

export function NavBarProvider({ children }) {
  const [toggleNav, setToogleNav] = useState('hide');

  function toogleAppears() {
    if (toggleNav === 'hide') {
      setToogleNav('show');
    } else {
      setToogleNav('hide');
    }
  }

  function handleClick() {
    setToogleNav('hide');
    window.scrollTo(0, 0);
  }

  const context = {
    toggleNav, toogleAppears, handleClick, setToogleNav,
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
