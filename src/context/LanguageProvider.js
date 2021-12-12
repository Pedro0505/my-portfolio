import PropTypes from 'prop-types';
import React, { useState } from 'react';
import LanguageContext from './LanguageContext';
import Translation from '../services/Translation';

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('Português');

  function handleLanguage(idiom) {
    setLanguage(idiom);
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage, Translation }}>
      { children }
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
