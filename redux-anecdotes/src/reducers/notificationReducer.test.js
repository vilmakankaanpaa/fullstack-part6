import notificationReducer, { initialState } from './notificationReducer'

describe('notificationReducer', () => {
  test('initial message is shown', () => {

    const action = {
      type: 'DO_NOTHING'
    }
    const newState = notificationReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('set new notification', () => {
    const message = 'this is a new message'
    const action = {
      type: 'SET NEW',
      data: message 
    }

    const newState = notificationReducer(initialState, action)
    expect(newState).toEqual(message)

  })

  test('remove initial notification', () => {
  
    const action = {
      type: 'CLEAR'
    }
    const newState = notificationReducer(initialState, action)
    expect(newState).toEqual('')

  })
})