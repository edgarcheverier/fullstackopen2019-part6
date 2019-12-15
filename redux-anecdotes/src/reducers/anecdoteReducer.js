const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

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
      const newAnecdote = asObject(action.data.content);
      return [...state, newAnecdote];
    default:
      return state;
  }
}

export const initAnecdotesActionCreator = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export const voteActionCreator = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const addActionCreator = (content) => {
  return {
    type: 'ADD',
    data: { content }
  }
}

export default anecdoteReducer
