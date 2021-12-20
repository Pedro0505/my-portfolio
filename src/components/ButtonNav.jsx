import React, { useContext } from 'react';
import { NavBarContext } from '../context/NavBarContext';
import menu from '../images/menu.svg';
import close from '../images/close.svg';

function ButtonNav() {
  const { toogleAppears, toggleNav } = useContext(NavBarContext);
  return (
    <button type="button" className="menu-button style-button" onClick={toogleAppears}>
      <img src={toggleNav === 'hide' ? menu : close} alt="Menu" />
    </button>
  );
}

export default ButtonNav;
