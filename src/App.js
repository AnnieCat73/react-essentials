import React from 'react';
import './App.css';
import TodoList from './todos/TodoList';
import Practice from './MyFolder/Practice';
import Timeapp from './todos/Timeapp';


function App() {

  return (
    <div className="App">
      <TodoList />
      <Practice authorized={true} />
      <Timeapp />
    </div>
  );
}




export default App;
