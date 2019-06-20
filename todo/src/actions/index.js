export const ADD_TODO = "ADD_TODO"

export const addToDo = (task) => {
  return {
    type: ADD_TODO,
    payload: {
      text: task,
      completed: false
    }
  }
}