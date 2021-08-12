import axios from 'axios';

export const requestLogin = credentials => (
  axios.post('api/session', credentials)
  // $.ajax({
  //   method: 'POST',
  //   url: 'api/session',
  //   data: credentials
  // })
)

export const requestLogout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
)