import React, { useState, useEffect } from 'react';
import './App.css';

function App () {
  
  const [emotion, setEmotion]= useState("happy");
  //current state variable/update the state/initial state
  //console.log(emotion);//happy
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`)
  }, [emotion]);//so emotion gets logged everytime we click
  //if empty i.e [] then only logged once

  useEffect(() => {
    console.log(`It's a ${secondary} around here!`);
  }, [secondary]);//this one only logs secondary

  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}.</h1>
      <button onClick={() => setEmotion("happy")}>Make Happy</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    </>
  )
}

export default App;