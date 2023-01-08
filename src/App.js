import React, { useState } from 'react';
import { FormControl, Input, InputLabel } from '@mui/material';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodo([...todos, input]);
    setInput('');
  }

  const deleteItem = (id) =>{
    setTodo((Element) =>{
      return Element.filter((current,index) => index !== id);
    })
  }

  return (
    <div className="App">
      <div className="app-container">
        <form>
          <FormControl>
            <InputLabel>What do you want to do?</InputLabel>
            <Input
                value={input}
                onChange={event => setInput(event.target.value)}
            />
          </FormControl>

          <button
              disabled={!input}
              onClick={addTodo}
              className="button button-yellow"
              title="Adds this to do to the list."
          >Add Item</button>
        </form>

        <div className="todos-container">
          {todos.map((todo, index) => 
            <Todo key={index} id={index} onSelect={deleteItem} text={todo} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
