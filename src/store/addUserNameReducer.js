const defaultState = {
    Username:'' 
  }
  
 export const addUserNameReducer = (state = defaultState, action) => {
    switch (action.type) {
  case 'ADD_NAME':
  return {...state, Username: action.newName}
      default:
        return state
    }
  }
  