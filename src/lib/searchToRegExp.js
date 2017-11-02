function searchToRegExp(search) {
  // TODO: escape all meta characters
  return new RegExp(
    search
    .trim()
    .toLowerCase()
    .replace(/\//g, '\/')
    .replace(/\*/g, '(.*)')
  );
}

export default searchToRegExp;
