import axios from "axios";

export const createUser = (user) => (
  axios.post('api/users',
  user)

  // $.ajax({
  //   method: 'POST',
  //   url: 'api/users/',
  //   data: user
  // })
)

export const requestUser = (userId) => (
  axios.get(`api/users/${userId}`)

  // $.ajax({
  //   method: "GET",
  //   url: `api/users/${userId}`,
  // });
)

export const updateUser = (userId, user) => {
  return $.ajax({
    method: "patch",
    url: `api/users/${userId}`,
    data: user,
    contentType: false,
    processData: false
  })
}

export const requestUsersPosts = (userId) => (
  axios.get(`/api/users/${userId}/posts`)
  // $.ajax({
  //   method: "GET",
  //   url: `/api/users/${userId}/posts`,
  // });
)
