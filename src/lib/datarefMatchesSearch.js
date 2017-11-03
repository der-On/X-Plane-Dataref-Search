function datarefMatchesSearch(search, dataref) {
  return (
    dataref.name.toLowerCase().search(search) !== -1 ||
    (dataref.description || '').toLowerCase().search(search) !== -1
  );
}

export default datarefMatchesSearch;
