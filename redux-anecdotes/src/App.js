/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import anecdotesService from './services/anecdotes';
import { initAnecdotesActionCreator } from './reducers/anecdoteReducer';

const App = (props) => {
  useEffect(() => {
    anecdotesService.getAll().then(data => {
      props.initAnecdotesActionCreator(data)
    })
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
    initAnecdotesActionCreator: (value) => dispatch(initAnecdotesActionCreator(value))
  }
}

export default connect(null, mapDispatchToProps)(App);
