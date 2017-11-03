const replacements = [
  ['\\/', '\\/'],
  ['\\[', '\\['],
  ['\\]', '\\]'],
  ['\\$', '\\$'],
  ['\\^', '\\^'],
  ['\\(', '\\('],
  ['\\)', '\\)'],
  ['\\?', '\\?'],
  ['\\+', '\\+'],
  ['\\.', '\\.'],
  ['\\{', '\\{'],
  ['\\}', '\\}'],
  ['\\,', '\\,'],
  ['\\!', '\\!'],
  ['\\=', '\\='],
  ['\\|', '\\|'],
  ['\\*', '(.*)']
];

function searchToRegExp(search) {
  search = search.trim().toLowerCase();

  replacements.forEach(replacement => {
    search = search.replace(new RegExp(replacement[0], 'g'), replacement[1]);
  });

  return new RegExp(search);
}

export default searchToRegExp;
