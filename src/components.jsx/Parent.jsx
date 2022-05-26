import React from 'react'
import { useState } from 'react'
import Child from './Child'

function Parent() {
  const [word, setWord] = useState('Bob')
  return (
    <div style={{ backgroundColor: "pink", color: "black" }}>
      <h1>{word}</h1>
      <Child
        changeWord={word => setWord(word)} />{/*like props attr*/}
    </div>
  );
}

export default Parent