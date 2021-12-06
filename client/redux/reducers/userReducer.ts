const userExistsReducer = (
    state = {
      user: [],
    },
    action
  ) => {
    switch (action.type) {
      case 'USER_EXISTS':
        return {
          ...state,
          user: action.payload,
        }
      default:
        return {
          ...state,
        }
    }
  }
  
  export default userExistsReducer
  