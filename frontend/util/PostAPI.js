export const requestUsersFeed = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/currentUser/feed`
  })
)

export const requestPost = postId => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  })
)

export const updatePost = post => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`
  })
)