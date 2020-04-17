import React, { Component } from 'react';

import Input from './components/Input';
import Results from './components/Results';

class App extends Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };
  }

  onChange(query) {
    this.setState({
      query
    });
  }

  render() {
    return (
      <div className='container'>
        <Input onChange={ this.onChange.bind(this) } />

        <Results
          query={this.state.query}
        />
      </div>
    );
  }
}

export default App;
