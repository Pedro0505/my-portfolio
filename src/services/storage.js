/**
 * @name saveLanguage
 * @description add the chosen language
 * @param {string}
 */

export const saveLanguage = (idiom) => {
  const language = localStorage.getItem('language');

  if (!language) localStorage.setItem('language', idiom);
  localStorage.setItem('language', idiom);
};

/**
 * @name saveTheme
 * @description add the theme chosen
 * @param {string} { theme }
 */

export const saveTheme = (theme) => {
  const getTheme = localStorage.getItem('theme');

  if (!getTheme) localStorage.setItem('theme', theme);
  localStorage.setItem('theme', theme);
};
