import React from 'react';
import styled from 'styled-components';

const ToDo = (props) => {
  return (
    <div>
      {props.task.completed ? (
        <ToDoEl
          className="todo"
          onClick={() => props.handlerCompleteToDo(props.task.id)}
        >
          <p>{props.task.text}</p>
        </ToDoEl>
      ) : (
        <ToDoEl
          className="todo complete"
          onClick={() => props.handlerCompleteToDo(props.task.id)}
        >
          <p>{props.task.text}</p>
        </ToDoEl>
           )
      }
    </div>
  )
}

const ToDoEl = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #cacaca;
  border-radius: 10px;
  background: #dedede;

  &.complete {
    background: green;
  }

  p {
    margin: 0 20px 0 0;
  }
  button {
    min-width: 75px;
    margin-right: 10px;
  }
`;

export default ToDo;