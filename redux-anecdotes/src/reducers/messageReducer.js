export const messageActionCreator = (message) => {
  return {
    type: 'ADD_MESSAGE',
    message
  }
}

const messageReducer = (state = 'Welcome!', action) => {
  switch(action.type){
    case 'ADD_MESSAGE':
      return action.message;
    default:
      return state;
  }
}

export default messageReducer;
