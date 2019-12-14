import React from 'react';
import { voteActionCreator } from '../reducers/anecdoteReducer';

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().anecdotes;

  const vote = (id) => {
    props.store.dispatch(voteActionCreator(id))
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList;