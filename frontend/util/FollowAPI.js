export const getFollowers = userId => (
  $.ajax({
    method: 'GET',
    url: '/api/follows/followers',
    data: {user_id: userId}
  })
)

export const getFollowings = userId => (
  $.ajax({
    method: 'GET',
    url: '/api/follows/followings',
    data: {user_id: userId}
  })
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