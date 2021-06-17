import React from 'react';

const TextInput = ({value, onChange, onFocus}) => {
  console.log('TextInput props');
  console.log('value', value);
  console.log('onChange', onChange);
  console.log('onFocus', onFocus);
  return <input type={"text"} value={value}/>;
}

export default TextInput;
