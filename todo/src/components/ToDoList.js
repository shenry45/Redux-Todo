import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

class ToDoList extends React.Component {
  state = {
    task: ''
  }

  handlerAddToDo = e => {
    e.preventDefault();

    if (this.state.task.length > 1) {

      this.setState(  prevState => { id: prevState.id++ });

      this.props.addToDo(this.state.task, this.props.id);
  
      this.setState({task: ''});
    }
  }

  handlerChange = e => {
    e.preventDefault();

    this.setState({ task: e.target.value });
  }

  render() {
    return (
      <div className="list">
        <ToDoForm
          handlerAddToDo={this.handlerAddToDo}
          handlerChange={this.handlerChange}
          task={this.state.task}
        />
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
    toDoList: state.toDoList,
    id: state.id
  }
}

export default connect(mapStateToProps, { addToDo })(ToDoList);