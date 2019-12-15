import React from 'react';
import { connect } from 'react-redux';
import { addActionCreator } from '../reducers/anecdoteReducer';
import { messageActionCreator, showMessageActionCreator } from '../reducers/notificationReducer';
import anecdotesService from '../services/anecdotes';

const AnecdoteForm = (props) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    const newAnecdote = await anecdotesService.createNew(content);
    props.addActionCreator(newAnecdote);
    const message = `you created ${content}`;
    props.messageActionCreator(message);
    props.showMessageActionCreator(true);
    setTimeout(() => props.showMessageActionCreator(false), 5000);
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='content' />
        <button type='submit'>create</button>
      </form>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addActionCreator: (value) => dispatch(addActionCreator(value)),
    messageActionCreator: (value) => dispatch(messageActionCreator(value)),
    showMessageActionCreator: (value) => dispatch(showMessageActionCreator(value))
  }
}

export default connect(null, mapDispatchToProps)(AnecdoteForm);
