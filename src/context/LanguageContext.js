import PropTypes from 'prop-types';
import React, { useEffect, useState, createContext } from 'react';
import Translation from '../data/Translation';
import handleSave from '../services/storage';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('Português');

  useEffect(() => {
    const choice = localStorage.getItem('language') || 'Português';
    setLanguage(choice);
  }, []);

  function handleLanguage(idiom) {
    handleSave(idiom, 'language');
    setLanguage(idiom);
  }

  return (
    <LanguageContext.Provider value={ { language, handleLanguage, Translation } }>
      { children }
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
