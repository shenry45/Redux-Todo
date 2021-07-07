import React from 'react';
import styled from 'styled-components';

const ToDo = (props) => {
  return (
    <div>
      {props.task.completed ? ( // if task is complete
        <ToDoEl
          className="todo complete"
        >
          <p onClick={() => props.handlerCompleteToDo(props.task.id)}>{props.task.text}</p>
          <button onClick={() => props.handlerDeleteToDo(props.task.id)}>Delete</button>
        </ToDoEl>
      ) : (
        <ToDoEl
          className="todo"
        >
          <p onClick={() => props.handlerCompleteToDo(props.task.id)}>{props.task.text}</p>
        </ToDoEl>
           )
      }
    </div>
  )
}

const ToDoEl = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 40px;
  border: 1px solid #cacaca;
  border-radius: 10px;
  background: #f5f5f5;

  &.complete {
    background: #d2d2d2;

    p {
      text-decoration: line-through;
    }
  }

  p {
    cursor: pointer;
    width: 100%;
    font-size: 1.25rem;
    margin: 0 20px 0 0;
    word-break: break-word;
  }
  
  button {
    min-width: 75px;
    margin-right: 10px;
  }
`;

export default ToDo;