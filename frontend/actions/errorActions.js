export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';
export const RESET_POST_FROM_ERRORS = 'RESET_POST_FROM_ERRORS';

export const resetSessionErrors = () => dispatch => (
  dispatch({type: RESET_SESSION_ERRORS})
)

export const resetPostFormErrors = () => dispatch => (
  dispatch({type: RESET_POST_FROM_ERRORS})
)