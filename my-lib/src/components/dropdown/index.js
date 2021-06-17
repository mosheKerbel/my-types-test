import React from 'react';

const Dropdown = ({options = [], selectedValue, onChange, disabled}) => {
  console.log('Dropdown props');
  console.log('options', options);
  console.log('selectedValue', selectedValue);
  console.log('onChange', onChange);
  console.log('disabled', disabled);
  return <select>
    {
      options.map((option,idx) => <option value={idx} key={idx}>{option}</option>)
    }
    <option>first option</option>
    <option>first option</option>
  </select>;
}

export default Dropdown;
