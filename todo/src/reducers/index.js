import { ADD_TODO } from '../actions'; // returns only file available

const initialState = {
  toDoList: [
    {
      text: 'Help Dad',
      completed: false
    },
    {
      text: 'Clean my room',
      completed: false
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: // check action type is to add todo
      return {
        ...state,
        toDoList: [ // take original list and add new todo
          ...state.toDoList,
          action.payload
        ]
      }
    default:
      return state
  }
}