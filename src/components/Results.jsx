import React, { Component } from 'react';

import { fetchSearch } from '../api';

class Result extends Component {
  render() {
    // use regular expression to highlight
    // search match
    const regex = new RegExp(this.props.query, 'i');

    const result = this.props.result
      .replace(regex, "<span class='query'>$&</span>");

    return (
      <li className='result-element' dangerouslySetInnerHTML={{ __html: result }}></li>
    );
  }
}

class Results extends Component {
  constructor() {
    super();

    this.state = {
      results: []
    };
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      const results = await fetchSearch(this.props.query);

      this.setState({
        results
      });
    }
  }

  render() {
    return (
      <div className='results-container'>
        <ul>
          { this.state.results.map(result =>
            <Result
              key={result}
              result={result}
              query={this.props.query}
            />
          ) }
        </ul>
      </div>
    );
  }
}

export default Results;
