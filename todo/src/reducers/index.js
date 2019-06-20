import {} from '../actions/index';

const initialState = {
  toDoList: [
    {
      text: 'Help Dad'
    },
    {
      text: 'Clean my room'
    }
  ]
}

export default (state = initialState, action) => {
  /*switch (action.type) {
    default:
      return state
  }*/
  
  return state;
}