import React, { Component } from 'react';

class Input extends Component {
  handleChange(event) {
    const value = event.target.value;

    const escaped = value.replace(/[\W_]+/g,"");

    this.props.onChange(escaped);
  }

  render() {
    return (
      <input
        className='autocomplete-input'
        placeholder='Search for names...'
        onChange={this.handleChange.bind(this)}
        autoFocus
      />
    );
  }
}

export default Input;
