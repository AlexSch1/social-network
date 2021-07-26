export const LoginStartAction = (userCredentials) => ({
  type: 'LOGIN_START'
});

export const LoginSuccessAction = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user
});

export const LoginFailureAction = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error
});
