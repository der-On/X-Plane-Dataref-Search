import { h } from 'preact';

function search(app) {
  return h('form', {
    className: 'app-search',
    action: 'javascript:;'
  }, [
    h('div', {
      className: 'mdl-textfield mdl-js-textfield'
    }, [
      h('input', {
        className: 'mdl-textfield__input',
        type: 'text',
        id: 'search',
        value: app.state.search || '',
        onInput: app.handleSearchChange
      }),
      h('label', {
        className: 'mdl-textfield__label',
        for: 'search'
      }, 'Search ...')
    ])
  ]);
}

export default search;
