import React from 'react';
import { voteActionCreator } from '../reducers/anecdoteReducer';
import { messageActionCreator, showMessageActionCreator } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().anecdotes;

  const vote = (id, content) => {
    const message = `you voted ${content}`;
    props.store.dispatch(voteActionCreator(id));
    props.store.dispatch(showMessageActionCreator(true));
    props.store.dispatch(messageActionCreator(message));
    setTimeout(() => props.store.dispatch(showMessageActionCreator(false)), 5000);
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
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList;
