export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addToDo = (task, id) => {
  return {
    type: ADD_TODO,
    payload: {
      id: id + 1,
      text: task,
      completed: false
    }
  }
}

export const completeToDo = id => {
  return {
    type: COMPLETE_TODO,
    payload: {
      id: id,
      completed: true
    }
  }
}

export const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    payload: {
      id: id
    }
  }
}