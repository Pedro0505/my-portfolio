import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import LanguageContext from './LanguageContext';
import Translation from '../services/Translation';
import saveLanguage from '../services/storage';

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('Português');

  useEffect(() => {
    const choice = localStorage.getItem('language') ? localStorage.getItem('language') : 'Português';
    setLanguage(choice);
  }, []);

  function handleLanguage(idiom) {
    saveLanguage(idiom);
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
