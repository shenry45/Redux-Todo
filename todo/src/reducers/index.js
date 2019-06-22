import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions'; // returns only file available, action creator

const initialState = {
  id: 2,
  toDoList: [
    {
      id: 1,
      text: 'Help Dad',
      completed: false
    },
    {
      id: 2,
      text: 'Clean my room',
      completed: false
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: // adds todo
      state = {
        ...state,
        id: action.payload.id
      }
      return {
        ...state,
        toDoList: [ // take original list and add new todo
          ...state.toDoList,
          action.payload
        ]
      }
    case COMPLETE_TODO: // mark todo completed
      return {
        ...state,
        toDoList: state.toDoList.map(
          el => el.id === action.payload.id ? {...el, completed: !el.completed} : el
        ) // convert completed bool to opposite of matching ID todo
      }
    case DELETE_TODO: // deletes to do
      return {
        ...state,
        toDoList: state.toDoList.filter(todo => todo.id !== action.payload.id) // find all todos not matching in ID
      }
    default:
      return state
  }
}