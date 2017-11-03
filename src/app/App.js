import { h, Component } from 'preact';
import {
  debounce
} from 'lodash';
import parseDatarefs from '../lib/parseDatarefs';
import header from './header';
import menu from './menu';
import search from './search';
import datarefTable from './datarefTable';
import datarefTree from './datarefTree';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleSearchChange = debounce(this.handleSearchChange.bind(this), 300);
    this.handleTableView = this.handleTableView.bind(this);
    this.handleTreeView = this.handleTreeView.bind(this);

    this.state = {
      search: '',
      loading: true,
      viewMode: 'table',
      datarefs: {
        version: null,
        compiledAt: null,
        types: [],
        units: [],
        datarefs: []
      }
    };

    this.loadDatarefs()
    .then(datarefs => {
      this.setState({
        loading: false,
        datarefs: parseDatarefs(datarefs)
      });
    })
    .catch(err => {
      this.setState({
        loading: false,
        error: err
      });
    });
  }

  loadDatarefs() {
    return fetch('./DataRefs.txt')
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        return Promise.reject(new Error('Invalid response'));
      }
    });
  }

  handleSearchChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleTableView() {
    this.setState({
      viewMode: 'table'
    });
  }

  handleTreeView() {
    this.setState({
      viewMode: 'tree'
    });
  }

  componentDidUpdate() {
    if (this.loaderRef) {
      componentHandler.upgradeElement(this.loaderRef);
    }
    if (this.mainRef) {
      componentHandler.upgradeElement(this.mainRef);
      componentHandler.upgradeElement(this.mainRef.querySelector('.mdl-js-textfield'));
    }
  }

  render() {
    return h('main', {
      ref: ref => { this.mainRef = ref || this.mainRef; },
      className: 'app mdl-layout mdl-js-layout'
    }, [
      header(this),
      menu(this),
      search(this),
      this.state.loading && h('div', {
          ref: ref => {this.loaderRef = ref || this.loaderRef;},
          className: 'app-loading mdl-progress mdl-js-progress mdl-progress__indeterminate'
      }, ''),
      this.state.viewMode === 'table' && datarefTable(this),
      this.state.viewMode === 'tree' && datarefTree(this)
    ]);
  }
}

export default App;
