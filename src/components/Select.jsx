import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from '../context/LanguageContext';

function Select({ options }) {
  const { handleLanguage, language } = useContext(LanguageContext);

  return (
    <select
      value={ language }
      data-testid="language-selected"
      onChange={ ({ target: { value } }) => handleLanguage(value) }
    >
      {
        options.map((option, index) => (
          <option value={ option } className="choiceLanguage" key={ index }>
            { option }
          </option>
        ))
      }
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
