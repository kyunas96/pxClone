export const requestLogin = credentials => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: credentials
  })
)

export const requestLogout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
)