import React from 'react';
import emojipedia from './emojipedia';
import Entry from './Entry';
import Arrays from './Arrays';
import { useState } from 'react'
import practice from './practice'
import table from './table';






function App() {
  let now = new Date().toLocaleTimeString();
  setInterval(3000, updateTime);
  let isDone = true;

  const strikeThrough = { textDecoration: "line-through" }


  const [time, setTime] = useState(now)

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);

  }


  const [count, setCount] = useState(0);

  function decrease() {
    setCount(count - 1);
  }
  return (


    <div className='App'>
      <div className="container">
        <h1>{time}</h1>
        <button onClick={updateTime}>Get Time</button>
      </div>


      <p style={isDone ? strikeThrough : null}>Buy Milk</p>

      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={decrease}>-</button>

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
