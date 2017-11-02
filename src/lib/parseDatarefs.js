import {
  trim,
  get,
  negate,
  isNil,
  uniq,
  property
} from 'lodash';

function parseDatarefs(datarefs) {
  datarefs = datarefs.trim();
  const firstLine = datarefs.split('\n', 2)[0].split(/\s+/);
  const version = get(firstLine, 1, null);
  const compiledAt = firstLine.slice(1, 6).join('.');
  datarefs = datarefs
  .split('\n')
  .slice(2)
  .map(parseLine)
  .filter(negate(isNil));

  return {
    datarefs,
    version,
    compiledAt,
    types: uniq(datarefs.map(property('type'))),
    units: uniq(datarefs.map(property('unit')))
  };
}

function parseLine(line) {
  line = line.trim();

  if (line.length === 0) {
    return null;
  }

  const parts = line.split(/\s+/, 5).map(trim);

  return {
    name: get(parts, 0, null),
    type: get(parts, 1, null),
    writable: get(parts, 2, null),
    unit: get(parts, 3, null),
    description: get(parts, 4, null)
  };
}

export default parseDatarefs;
