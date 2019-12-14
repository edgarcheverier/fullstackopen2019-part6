import React from 'react';
import { addActionCreator } from '../reducers/anecdoteReducer';

const AnecdoteForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    props.store.dispatch(addActionCreator(content))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='content' />
      <button type='submit'>create</button>
  </form>
  )
}

export default AnecdoteForm;
