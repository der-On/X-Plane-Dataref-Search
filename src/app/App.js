import { h, Component } from 'preact';
import {
  debounce
} from 'lodash';
import parseDatarefs from '../lib/parseDatarefs';
import header from './header';
import search from './search';
import datarefTable from './datarefTable';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleSearchChange = debounce(this.handleSearchChange.bind(this), 300);

    this.state = {
      search: '',
      loading: true,
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

  render() {
    return h('main', {
        className: 'app mdl-layout'
      }, [
      header(this),
      search(this),
      this.state.loading
        ? h('div', {
          className: 'app-loading mdl-progress mdl-js-progress mdl-progress__indeterminate'
        }, '') : null,
      datarefTable(this)
    ]);
  }
}

export default App;
