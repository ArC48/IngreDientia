import React, {Component} from 'react'
import Select from "react-select";
import './multiselect.css';
import options from '../options';

class MultiSelectInput extends Component {
  state = {
    selectedOptions: [],
    inputValue: '',
    menuIsOpen: false
  };

  handleChange = selectedOptions => {
    this.setState({selectedOptions})
  };

  handleInputChange = inputValue => {
    this.setState({ inputValue, menuIsOpen: inputValue.length > 0 }); // Update menuIsOpen based on input value
  };

  customFilter = (option, inputValue) => {
    return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
  }

  render() {
    return (
      <div className='inputWrapper'>
        <Select
            menuIsOpen={this.state.menuIsOpen}
            classNamePrefix="custom-select"
            value={this.state.selectedOptions}
            onChange={this.handleChange}
            options={options}
            isMulti
            placeholder="Find by your ingredients..."
            onFocus={(e) => e.target.setAttribute('placeholder', '')}
            onInputChange={this.handleInputChange}
            filterOption={this.customFilter}
        />
      </div>
    )
  }
}

export default MultiSelectInput;