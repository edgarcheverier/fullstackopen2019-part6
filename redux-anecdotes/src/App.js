import React from 'react';

const App = (props) => {
  const anecdotes = props.store.getState()

  const vote = (id) => {
    props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    props.store.dispatch({
      type: 'ADD',
      data: { content }
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='content' />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
