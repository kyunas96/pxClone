export const fetchLikes = () => (
  $.ajax({
    method: 'GET',
    url: '/api/likes/'
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