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

export const updateUser = (userId, profile) => (
  axios.patch(`api/users/${userId}`,
  profile)

  // $.ajax({
  //   method: "PATCH",
  //   url: `api/users/${userId}`,
  //   data: profile,
  // });
)

export const requestUsersPosts = (userId) => (
  axios.get(`/api/users/${userId}/posts`)
  // $.ajax({
  //   method: "GET",
  //   url: `/api/users/${userId}/posts`,
  // });
)
