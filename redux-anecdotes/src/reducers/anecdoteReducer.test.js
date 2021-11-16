import anecdoteReducer, { initialState, voteAnecdote, addAnecdote } from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {

  test('should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = anecdoteReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  describe('when two anecdotes exist', () => {

    const action = { type: 'DO_NOTHING' }
    const state = anecdoteReducer(
      [
        {content: 'first anecdote to test', id: 1, votes: 0},
        { content: 'second anecdote to test', id: 2, votes: 0 }
      ], 
      action)

    test('voting an anecdote returns correctly changed state', () => {

      const action = voteAnecdote(2)
      deepFreeze(state)
      const newState = anecdoteReducer(state, action)

      expect(newState).toHaveLength(2)
      expect(newState).toContainEqual(state[0])
      expect(newState).toContainEqual({
        content: 'second anecdote to test',
        id: 2,
        votes: 1
      })
    })

    test('returns updated state with action NEW_ANECDOTE', () => {

      const newAnecdote = 'New anecdote'
      const action = {
        type: 'NEW_ANECDOTE',
        data: {
          content: newAnecdote,
          id: 3,
          votes: 0
        }
      }
      
      deepFreeze(state)
      const newState = anecdoteReducer(state, action)

      expect(newState).toHaveLength(3)
      expect(newState).toContainEqual({
        content: newAnecdote,
        id: 3,
        votes: 0
      })
    })
  })
})