import React from 'react';
import emojipedia from './emojipedia';
import Entry from './Entry';
import Arrays from './Arrays';
import { useState } from 'react'

//import './App.css';
//import TodoList from './todos/TodoList';
//import Practice from './MyFolder/Practice';
//import Timeapp from './todos/Timeapp';
//import Heading from './todos/Heading';
//import List from './todos/List';
//import CurrentGreeting from './todos/CurrentGreeting';

//1)Create entry component
//2) Create props to replace the hard coded data
//3) Map through emojipeida array and render components


/*function createEntry(emojiEntry) {
  return <Entry
    key={emojiEntry.id}
    emoji={emojiEntry.emoji}
    name={emojiEntry.name}
    description={emojiEntry.meaning}
  />

}*/

function App() {
  let isDone = true;

  const strikeThrough = { textDecoration: "line-through" }
  /*const button = document.querySelector("button");
  function strike() {
    button.style.textDecoration = "line-through";
  }
  function unStrike() {
    button.style.textDecoration = null;
  }*/
  return (
    <div className='App'>
      <p style={isDone ? strikeThrough : null}>Buy Milk</p>
      {/*}2)but the above depends on what we set isDone to in the
      programme, but what if user want to click on it: do this
      the imperative Javascript way but cumbersome:
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change to unstrike through</button>*/}
      <p>Buy Milk</p>

      {/*<Heading />
      <List />
      <CurrentGreeting />
      <TodoList />
      <Practice authorized={true} />
      <Timeapp />*/}

      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/*}{emojipedia.map(createEntry)}*/}
        {emojipedia.map(emojiEntry => (
          <Entry
            key={emojiEntry.id}
            emoji={emojiEntry.emoji}
            name={emojiEntry.name}
            description={emojiEntry.meaning}
          />
        ))}
      </dl>

      <Arrays />

    </div >
  );
}




export default App;
