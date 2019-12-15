import React from 'react';
import { voteActionCreator } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes

  const vote = (anecdote) => {
    props.voteActionCreator(anecdote.id, {...anecdote, votes: anecdote.votes + 1});
    props.setNotification(`you voted ${anecdote.content}`, 5);
  }
  if (anecdotes.length) {
    return (
      <>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </>
    )
  }
  return <></>
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    voteActionCreator: (id, value) => dispatch(voteActionCreator(id, value)),
    setNotification: (message, time) => dispatch(setNotification(message, time))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
