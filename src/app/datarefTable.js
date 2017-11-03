import { h } from 'preact';
import {
  partial
} from 'lodash';
import searchToRegExp from '../lib/searchToRegExp';
import datarefMatchesSearch from '../lib/datarefMatchesSearch';

function datarefTableRow(dataref) {
  return h('tr', {
    key: dataref.name
  }, [
    h('td', {
      className: 'app-dataref-table__name-cell mdl-data-table__cell--non-numeric'
    }, dataref.name),
    h('td', {
      className: 'app-dataref-table__type-cell mdl-data-table__cell--non-numeric'
    }, dataref.type),
    h('td', {
      className: 'app-dataref-table__unit-cell mdl-data-table__cell--non-numeric'
    }, dataref.unit),
    h('td', {
      className: 'app-dataref-table__writable-cell mdl-data-table__cell--non-numeric'
    }, dataref.writable),
    h('td', {
      className: 'app-dataref-table__description-cell mdl-data-table__cell--non-numeric'
    }, dataref.description)
  ]);
}

function datarefTable(app) {
  const searchPattern = searchToRegExp(app.state.search);
  const datarefFilter = partial(datarefMatchesSearch, searchPattern);

  return h('table', {
    className: 'app-dataref-table mdl-data-table mdl-shadow--2dp'
  }, [
    h('thead', {}, [
      h('th', {
        className: 'mdl-data-table__cell--non-numeric'
      }, 'Name'),
      h('th', {
        className: 'mdl-data-table__cell--non-numeric'
      }, 'Type'),
      h('th', {
        className: 'mdl-data-table__cell--non-numeric'
      }, 'Unit'),
      h('th', {
        className: 'mdl-data-table__cell--non-numeric'
      }, 'Writable'),
      h('th', {
        className: 'mdl-data-table__cell--non-numeric'
      }, 'Description')
    ]),
    h('tbody', {},
      app.state.datarefs.datarefs
      .filter(datarefFilter)
      .map(datarefTableRow)
    )
  ]);
}

export default datarefTable;
