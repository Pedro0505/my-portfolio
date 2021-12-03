import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

function Language() {
  const { handleLanguage } = useContext(LanguageContext);
  return (
    <select data-testid="language-selected" onChange={({ target: { value } }) => handleLanguage(value)}>
      <option value="Português" className="choiceLanguage">Português</option>
      <option value="English" className="choiceLanguage">English</option>
    </select>
  );
}

export default Language;