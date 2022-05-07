import React from 'react';
import emojipedia from './emojipedia';
import Entry from './Entry';

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


function createEntry(emojiEntry) {
  return <Entry
    key={emojiEntry.id}
    emoji={emojiEntry.emoji}
    name={emojiEntry.name}
    description={emojiEntry.meaning}
  />

}

function App() {

  return (
    <div className="App">
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
        {emojipedia.map(createEntry)}
      </dl>

    </div>
  );
}




export default App;
