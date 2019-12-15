import anecdotesService from '../services/anecdotes';
const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_ANECDOTES':
      return action.data;
    case 'VOTE':
      const id = action.data.id;
      return state.map(ele => ele.id !== id ? ele : action.data);
    case 'ADD':
      return [...state, action.data];
    default:
      return state;
  }
}

export const initAnecdotesActionCreator = () => {
  return async (dispatch) => {
    const data = await anecdotesService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data
    })
  }
}

export const voteActionCreator = (id, content) => {
  return async (dispatch) => {
    const data = await anecdotesService.changeOne(id, content);
    dispatch({
      type: 'VOTE',
      data
    })
  }
}

export const addActionCreator = (content) => {
  return async (dispatch) => {
    const data = await anecdotesService.createNew(content);
    dispatch({
      type: 'ADD',
      data
    })
  }
}

export default anecdoteReducer
