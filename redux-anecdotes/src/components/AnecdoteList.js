import React from 'react';
import { voteActionCreator } from '../reducers/anecdoteReducer';
import { messageActionCreator, showMessageActionCreator } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes

  const vote = (anecdote) => {
    const message = `you voted ${anecdote.content}`;
    props.voteActionCreator(anecdote.id, {...anecdote, votes: anecdote.votes + 1});
    props.messageActionCreator(message);
    props.showMessageActionCreator(true);

    setTimeout(() => props.showMessageActionCreator(false), 5000);
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
    messageActionCreator: (value) => dispatch(messageActionCreator(value)),
    showMessageActionCreator: (value) => dispatch(showMessageActionCreator(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
