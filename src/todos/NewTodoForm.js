import React, {useState} from 'react';

const NewTodoForm = () => {
  const [input, setInputValue] = useState('')
  return (
    <div className="new-todo-form">
      <input 
        type="text"
        placeholder="Type your new todo here"
        value={input} 
      />
      <button onChange={e => setInputValue(e.target.value)}>Create Todo</button>
    </div>
  );
  }
export default NewTodoForm;