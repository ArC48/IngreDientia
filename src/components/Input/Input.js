import React, { Component } from 'react'
import './Input.css'
import magnifier from './assets/magnifier.png'
export default class Input extends Component {
  render() {
    const { type='text', placeholder, value, onChange } = this.props;
    return (
      <div className='inputWrapper'>
        <input
        type={type}
        placeholder= {placeholder}
        value={value}
        onChange={onChange}
        className='inputElement'
      />
      </div>
    )
  }
}
