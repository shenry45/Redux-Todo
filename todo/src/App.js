import React from 'react';
import ToDoList from './components/ToDoList';
import styled from 'styled-components';

const App = () => {
  return (
    <AppEl className="App">
      <h1>Today's To Do List</h1>
      <ToDoList />
    </AppEl>
  );
}

const AppEl = styled.div`
  width: 700px;
  margin: 0 auto;

  h1 {
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
  }
`;

export default App;
