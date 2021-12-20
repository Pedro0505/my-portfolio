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

  return (
    <NavBarContext.Provider value={{ toggleNav, toogleAppears, setToogleNav }}>
      { children }
    </NavBarContext.Provider>
  );
}

NavBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
