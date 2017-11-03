import { h } from 'preact';
import {
  partial
} from 'lodash';
import searchToRegExp from '../lib/searchToRegExp';
import datarefMatchesSearch from '../lib/datarefMatchesSearch';

function datarefTree(app) {
  const searchPattern = searchToRegExp(app.state.search);
  const datarefFilter = partial(datarefMatchesSearch, searchPattern);

  return h('ul', {
    className: 'app-dataref-tree mdl-shadow--2dp'
  }, [
    
  ]);
}

export default datarefTree;
