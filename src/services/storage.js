/**
 * @name saveLanguage
 * @description add the chosen language
 * @param {string}
 */

const saveLanguage = (idiom) => {
  const language = localStorage.getItem('language');

  if (!language) localStorage.setItem('language', idiom);
  localStorage.setItem('language', idiom);
};

export default saveLanguage;
