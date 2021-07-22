export const requestAllPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/posts'
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