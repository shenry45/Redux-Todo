import React from 'react';
import styled from 'styled-components';

function ToDoForm(props) {
  return(
    <FormEl onSubmit={props.handlerAddToDo}>
      <label>Add a To Do</label>
      <input
        type="text"
        onChange={props.handlerChange}
        value={props.task}
        placeholder="New Task"
      ></input>
      <button type="submit" onClick={props.handlerAddToDo}>Add To Do</button>
    </FormEl>
  )
}

const FormEl = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 20px;
  
  input {
    padding: 5px;
    margin-bottom: 10px;
  }

  button {
    background: lightgrey;
    padding: 5px;
    border-radius: 5px;
  }
`;

export default ToDoForm;