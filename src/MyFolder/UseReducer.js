//from this:

import React, { useState } from 'react';
import './App.css';

function App () {
  const [checked, setChecked] = useState(false);
  
  function toggle() {
    setChecked((checked) => !checked);
  }
  

  return (
    <>
      <input type="checkbox" 
        value={checked} 
        onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}
export default App;

//to