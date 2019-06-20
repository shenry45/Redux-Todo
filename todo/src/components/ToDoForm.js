import React from 'react';

function ToDoForm(props) {
  return(
    <form onSubmit={props.handlerAddToDo}>
      <input
        type="text"
        onChange={props.handlerChange}
        value={props.task}
      ></input>
      <button type="submit" onClick={props.handlerAddToDo}>Add To Do</button>
    </form>
  )
}

export default ToDoForm;