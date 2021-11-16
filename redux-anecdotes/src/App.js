import React, { useEffect } from 'react'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  },[dispatch]) 

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <Notification />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App