export const getProfile = userId => (
  $.ajax({
    method: 'GET',
    url: `api/profile/${userId}`
  })
)

export const updateProfile = (userId, profile) => (
  $.ajax({
    method: 'PATCH',
    url: `api/profile/${userId}`,
    data: profile
  })
)

export const requestUsersPosts = (userId) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}/posts`,
  });