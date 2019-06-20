import React from 'react';
import { connect } from 'react-redux';

import ToDo from './ToDo';

class ToDoList extends React.Component {
  render() {
    return (
      <div className="list">
        {
          this.props.toDoList.map(task => (
            <ToDo task={task} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  }
}

export default connect(mapStateToProps, {})(ToDoList);