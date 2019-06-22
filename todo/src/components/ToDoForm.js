import React from 'react';

function ToDoForm(props) {
  return(
    <form onSubmit={props.handlerAddToDo}>
      <input
        type="text"
        onChange={props.handlerChange}
        value={props.task}
        placeholder="New Task"
      ></input>
      <button type="submit" onClick={props.handlerAddToDo}>Add To Do</button>
    </form>
  )
}

export default ToDoForm;