
// ***SAVE ACTION TYPES AS VARIABLES
export const GET_NEW_USER = 'GET_NEW_USER';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';

// ***CREATE AND EXPORT ACTION
export const getUser = (event) => ({
  type: GET_NEW_USER,
  data: event.preventDefault()
})

export const handleChange = (event) => ({
  type: HANDLE_CHANGE,
  data: event.target.value
})