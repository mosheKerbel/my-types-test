import React from 'react';
import { TextInput, Button, Dropdown } from 'my-lib';

function App() {
  return (
    <div className="App">
      <Button disabled={false} onClick={()=>{}} skin={"alert"}/>
      <TextInput onChange={()=>{}} value={"hello world"}
                 onFocus={()=>{}} dataHook={"hook"}/>
      <Dropdown options={['green', 'red', 'blue']}
                selectedValue={"green"}
                onChange={()=>{}}
                dataHook={"my-hook"}/>
    </div>
  );
}

export default App;
