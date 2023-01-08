import React from 'react';

function Todo(props) {
  return (
    <div className="todo">
      <h4 className="todo-title">{props.text}</h4>
      <button
          className="button button-orange-light"
          onClick={() => {props.onSelect(props.id)}}
          title="Removes this to do from the list."
      >Delete</button>
    </div>
  );
}

export default Todo
