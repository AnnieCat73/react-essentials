import React, { useState, useEffect } from 'react';
import './App.css';

//https://api.github.com/users/AnnieCat73
//null as we won't have any data initially

//NB login is passed as prop login="AnnieCat73"
//in index.js
//Json stringigy just returns all the data/not great looking

function App ({ login}) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(setData);
  }, []);

  if(data) {
    return <div>{JSON.stringify(data)}</div>
  }

  return <div>No User Available</div>
}

export default App;
