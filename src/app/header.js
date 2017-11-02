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
      }, 'X-Pane Dataref Search')
    ])
  );
}

export default header;
