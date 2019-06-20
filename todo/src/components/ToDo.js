import React from 'react';
import styled from 'styled-components';

const ToDo = (props) => {
  return (
    <ToDoEl className="todo">
      <p>{props.task.text}</p>
      <button>Edit</button>
      <button>Delete</button>
    </ToDoEl>
  )
}

const ToDoEl = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
`;

export default ToDo;