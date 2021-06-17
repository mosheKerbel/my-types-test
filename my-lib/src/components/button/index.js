import React from 'react';

const    Button = ({skin, onClick, disabled, dataHook}) => {
  console.log('Button props');
  console.log('skin', skin);
  console.log('onClick', onClick);
  console.log('disabled', disabled);
  console.log('dataHook', dataHook);

  return <button>My Button</button>;
}

export default Button;
