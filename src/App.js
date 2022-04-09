import React, { useState, useEffect } from 'react';
import './App.css';

//https://api.github.com/users/AnnieCat73
//null as we won't have any data initially

//SO
//1) Have a loading state/waiting for some data
//2) Have a complete state/have data we want
//3) May have an error state if a proble

function App ({ login}) {
  const [data, setData] = useState(null);//a la .then()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);//a la .catch()
  
  useEffect(() => {
    if(!login) return;//if no login just return/jump out of useEffect call
    setLoading(true)//otherwise load
    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(setData)
    .then(() => setLoading(false))//so not loading once get data
    .catch(setError);//when sth goes wrong 
  }, [login]); //only run this function when login

  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  //if any error will display the above on page
  if(!data) return null;//if no data return null
  if(data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img src={data.avatar_url} alt={data.login} />
      </div>
    ) 
  }

  return <div>No User Available</div>
}

export default App;
