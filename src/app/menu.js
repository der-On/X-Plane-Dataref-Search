import { h } from 'preact';

function checkedIcon() {
  return h('i', {className: 'material-icons'}, 'radio_button_checked');
}
function uncheckedIcon() {
  return h('i', {className: 'material-icons'}, 'radio_button_unchecked');
}

function menu(app) {
  return h('div', {
    className: 'app-menu mdl-layout__drawer'
  }, [
    h('span', {
      className: 'mdl-layout-title'
    }, 'View mode'),
    h('nav', {
      className: 'mdl-navigation'
    }, [
      h('a', {
        className: 'mdl-navigation__link' + (app.state.viewMode === 'table' ? ' is-active' : ''),
        href: 'javascript:;',
        onClick: app.handleTableView
      }, [app.state.viewMode === 'table' ? checkedIcon() : uncheckedIcon(), ' ', 'Table']),
      h('a', {
        className: 'mdl-navigation__link' + (app.state.viewMode === 'tree' ? ' is-active' : ''),
        href: 'javascript:;',
        onClick: app.handleTreeView
      }, [app.state.viewMode === 'tree' ? checkedIcon() : uncheckedIcon(), ' ', 'Tree'])
    ])
  ]
  );
}

export default menu;
