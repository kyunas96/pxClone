export default () => {
  if (window.currentUser !== undefined) {
    return {
      loggedIn: true,
      currentUser: window.currentUser,
    };
  } else {
    return {
      loggedIn: false,
      currentUser: null,
    };
  }
};
