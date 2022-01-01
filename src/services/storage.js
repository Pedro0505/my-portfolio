/**
 * @name handleSave
 * @description add an item to localstorage
 * @param {string}
 */

const handleSave = (item, key) => {
  const itemSave = localStorage.getItem(key);

  if (!itemSave) localStorage.setItem(key, item);
  localStorage.setItem(key, item);
};

export default handleSave;
