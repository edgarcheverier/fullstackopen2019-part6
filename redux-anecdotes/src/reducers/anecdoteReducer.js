import anecdotesService from '../services/anecdotes';
const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_ANECDOTES':
      return action.data;
    case 'VOTE':
      const id = action.data.id;
      const anecdote = state.find(ele => ele.id === id);
      const anecdoteChanged = {...anecdote, votes: anecdote.votes + 1}
      return state.map(ele => ele.id !== id ? ele : anecdoteChanged);
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

export const voteActionCreator = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const addActionCreator = (data) => {
  return {
    type: 'ADD',
    data
  }
}

export default anecdoteReducer
