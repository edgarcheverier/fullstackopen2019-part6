import React from 'react';
// import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
// import Notification from './components/Notification';
/*
  <Notification store={props.store} />
  <AnecdoteForm store={props.store} />
 */
const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
    </div>
  )
}

export default App
