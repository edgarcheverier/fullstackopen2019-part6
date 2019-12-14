export const messageActionCreator = (message) => {
  return {
    type: 'ADD_MESSAGE',
    message
  }
}

export const showMessageActionCreator = (show) => {
  return {
    type: 'SHOW_MESSAGE',
    show
  }
}

const notificationReducer = (state = { message: 'Welcome', show: false }, action) => {
  switch(action.type){
    case 'ADD_MESSAGE':
      return { ...state, message: action.message }
    case 'SHOW_MESSAGE':
      return { ...state, show: action.show }
    default:
      return state;
  }
}

export default notificationReducer;
