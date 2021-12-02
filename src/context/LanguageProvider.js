import PropTypes from 'prop-types';
import React, { useState } from 'react';
import LanguageContext from './LanguageContext';

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('Português');

  function handleLanguage(idiom) {
    setLanguage(idiom);
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      { children }
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
