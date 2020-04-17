import React, { Component } from 'react';

import Input from './components/Input';
import Results from './components/Results';

import { fetchSearch } from './api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      results: [],
      showResults: true
    };
  }

  async onChange(query) {
    const results = await fetchSearch(query);

    this.setState({
      results,
      query
    });
  }

  hideResults() {
    this.setState({
      showResults: false
    });
  }

  showResults() {
    this.setState({
      showResults: true
    });
  }

  render() {
    return (
      <div className='container'>
        <Input
          onChange={ this.onChange.bind(this) }
          onBlur={ this.hideResults.bind(this) }
          onFocus={ this.showResults.bind(this) }
        />

        { this.state.showResults &&
          <Results
            query={this.state.query}
            results={this.state.results}
          />
        }
      </div>
    );
  }
}

export default App;
