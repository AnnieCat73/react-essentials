//import React from 'react'
import { useEffect, useState } from 'react'

function Secret() {
  return <h1>Secret information</h1>
}

function Regular() {
  return <h2>Normal information</h2>
}





function Practice({authorized}) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  return (
    <>
    <div>
      {authorized ? <Secret /> : <Regular />}
    </div>
    <div>
      <h2>Current emotion is {emotion} and {secondary}</h2>
      <button onClick={() => setEmotion("sad")}>Make sad</button>
      <button onClick={() => (setSecondary("crabby"))}>Make crabby</button>
      <button onClick={() => setEmotion("frustrated")}>Make frustrated</button>
      <button onClick={() => setEmotion("enthusiastic")}>Make enthusiastic</button>
    </div>
      

    </>
  )
}

export default Practice