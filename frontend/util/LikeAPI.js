export const fetchLikes = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/likes/${userId}`,
  })
)

export const addLike = (postId) => (
  $.ajax({
    method: 'POST',
    url: '/api/likes/',
    data: {
      id: postId
    }
  })
)

export const deleteLike = (postId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/likes/${postId}`
  })
)