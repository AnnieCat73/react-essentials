import React  from 'react';
import './App.css';
import TodoList from './todos/TodoList';
import Practice from './MyFolder/Practice';



function App () {
  
  return (
    <div className="App">
      <TodoList />
      <Practice authorized={true} />
    </div>
  );
}

  


export default App;
