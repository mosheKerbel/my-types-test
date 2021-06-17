import React from 'react';
import { Dropdown } from 'my-lib';

function App() {
  return (
    <div className="App">
      <Dropdown options={['green', 'red', 'blue']}
                selectedValue={"green"}
                onChange={()=>{}}
                dataHook={"my-hook"}/>
    </div>
  );
}

export default App;
