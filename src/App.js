import React from 'react';
import './App.css';
import TodoList from './todos/TodoList';
import Practice from './MyFolder/Practice';
import Timeapp from './todos/Timeapp';
import Heading from './todos/Heading';
import List from './todos/List';
import CurrentGreeting from './todos/CurrentGreeting';


function App() {

  return (
    <div className="App">
      <Heading />
      <List />
      <CurrentGreeting />
      <TodoList />
      <Practice authorized={true} />
      <Timeapp />
    </div>
  );
}




export default App;
