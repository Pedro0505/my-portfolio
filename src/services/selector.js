function bodySelector(options = []) {
  options.forEach(({ style, value }) => {
    document.querySelector('body').style[style] = value;
  });
}

export default bodySelector;
