import axios from 'axios'

export const setInfo = (name) => (dispatch) => {
  dispatch({
    type: 'SET_NAME',
    payload: name,
  })
}
