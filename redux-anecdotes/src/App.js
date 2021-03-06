/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import { initAnecdotesActionCreator } from './reducers/anecdoteReducer';

const App = (props) => {
  useEffect(() => {
    props.initAnecdotesActionCreator();
  }, []);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    initAnecdotesActionCreator: () => dispatch(initAnecdotesActionCreator())
  }
}

export default connect(null, mapDispatchToProps)(App);
