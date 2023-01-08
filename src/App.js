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
              className="button button-orange"
              title="Adds this to do to the list."
          >Add</button>
        </form>

        <div className="todos-status">
          {todos.length > 0 && <p>You have {todos.length} thing(s) to do.</p>}
        </div>

        <div className="todos-container">
          {todos.length > 0 ? (
            todos.map((todo, index) => 
              <Todo key={index} id={index} onSelect={deleteItem} text={todo} />
            )
          ) : (
            <div class="todos-congrats-message">
              <div className="
                  todos-congrats-message-icon
                  material-symbols-outlined">
                sentiment_very_satisfied
              </div>
              <p>Congrats! You have nothing to do right now!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
