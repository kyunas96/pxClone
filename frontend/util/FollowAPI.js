export const getFollowers = userId => (
  $.ajax()
)

export const getFollowings = userId => (

)

export const createFollow = followedUserId => (
  $.ajax({
    method: 'POST',
    url: '/api/follows/',
    data: { followed_user_id: followedUserId }
  })
)

export const deleteFollow = followedUserId => (
  $.ajax({
    method: 'DELETE',
    url: '/api/follows/',
    data: { followed_user_id: followedUserId }
  })
)