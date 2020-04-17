import React, { Component } from 'react';

class Input extends Component {
  handleChange(event) {
    const value = event.target.value;

    // filter all non word characters
    const escaped = value.replace(/[\W_]+/g,"");

    this.props.onChange(escaped);
  }

  render() {
    return (
      <input
        className='autocomplete-input'
        placeholder='Search for names...'
        onChange={ this.handleChange.bind(this) }
        onBlur={ this.props.onBlur.bind(this) }
        onFocus={ this.props.onFocus.bind(this) }
        autoFocus
      />
    );
  }
}

export default Input;
