import { h } from 'preact';

function header(app) {
  return h('header', {
      className: 'app-header mdl-layout__header mdl-layout--fixed-header'
    },
    h('div', {
      className: 'mdl-layout__header-row'
    }, [
      h('span', {
        className: 'mdl-layout-title'
      }, 'X-Plane Dataref Search'),
      h('div', {
        className: 'mdl-layout-spacer'
      }),
      h('div', {}, ['v', app.state.datarefs.version || '?', ' | ', app.state.datarefs.compiledAt || '?'])
    ])
  );
}

export default header;
