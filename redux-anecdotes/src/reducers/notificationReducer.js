const notificationReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case 'SET NEW':
      return action.data

    case 'CLEAR':
      return ''

    default: return state
  }
}

export const initialState = ''

let currentTimeout = null

export const setNotification = (message, timeout) => {
  return async dispatch => {
    clearTimeout(currentTimeout)
    dispatch({
      type: 'SET NEW',
      data: message
    })
    currentTimeout = setTimeout(() => {
      dispatch({
        type: 'CLEAR'
      })
    }, timeout * 1000)
  }
}

export default notificationReducer