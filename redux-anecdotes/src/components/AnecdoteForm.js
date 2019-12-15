import React from 'react';
import { connect } from 'react-redux';
import { addActionCreator } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    props.addActionCreator(content);
    props.setNotification(`you created ${content}`, 5)
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
    setNotification: (message, time) => dispatch(setNotification(message, time))
  }
}

export default connect(null, mapDispatchToProps)(AnecdoteForm);
