export const getProfile = userId => (
  $.ajax({
    method: 'GET',
    url: `api/profile/${userId}`
  })
)