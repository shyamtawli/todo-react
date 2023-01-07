import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
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
        <h1>TODO List</h1>
        
        <form>
          <FormControl>
            <InputLabel>Write a ToDo</InputLabel>
            <Input
                value={input}
                onChange={event => setInput(event.target.value)}
            />
          </FormControl>

        
          <Button
              disabled={!input}
              type="submit"
              onClick={addTodo}
              variant="contained"
          >Add Item</Button>
        </form>

        <div className='todos-container'>
          {todos.map((todo, index) => 
            <Todo key={index} id={index} onSelect={deleteItem} text={todo} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
