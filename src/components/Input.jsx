import React, { Component } from 'react';

class Input extends Component {
  handleChange(event) {
    const value = event.target.value;

    this.props.onChange(value);
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
