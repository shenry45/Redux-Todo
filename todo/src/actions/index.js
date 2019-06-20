export const ADD_TODO = "ADD_TODO"

export const addToDo = (task, id) => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++id,
      text: task,
      completed: false
    }
  }
}