import axios from "axios";

export const requestUsersFeed = () => (
  axios.get('api/posts')
  // $.ajax({
  //   method: 'GET',
  //   url: `/api/posts`
  // })
)

export const requestPost = postId => (
  axios.get(`/api/posts/${postId}`)
  // $.ajax({
    // method: 'GET',
    // url: `/api/posts/${postId}`
  // })
)

export const updatePost = post => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`
  })
)