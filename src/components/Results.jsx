import React, { Component } from 'react';

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
  render() {
    return (
      <div className='results-container'>
        <ul>
          { this.props.results.map(result =>
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
