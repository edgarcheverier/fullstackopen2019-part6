import React from 'react';
import { addActionCreator } from '../reducers/anecdoteReducer';
import { messageActionCreator, showMessageActionCreator } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    props.store.dispatch(addActionCreator(content));
    const message = `you created ${content}`;
    props.store.dispatch(showMessageActionCreator(true));
    props.store.dispatch(messageActionCreator(message));
    setTimeout(() => props.store.dispatch(showMessageActionCreator(false)), 5000);
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

export default AnecdoteForm;
