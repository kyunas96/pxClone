
export default () => {
  if (window.currentUser !== undefined) {
    return {
      session: {
        loggedIn: true,
        currentUser: window.currentUser
      }
    }
  } else {
    return {
      session: {
        loggedIn: false,
        currentUser: null
      }
    }
  }
}