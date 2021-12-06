import axios from 'axios'

export const userExists = ({user, userId}) => async (dispatch) => {
    const { email, email_verified} = user
    
    const { data } = await axios.get(`http://localhost:3333/api/users/${userId}?email=${email}&email_verified=${email_verified}`)
  dispatch({
    type: 'USER_EXISTS',
    payload: data,
  })
}


//pass user object as data through the get request