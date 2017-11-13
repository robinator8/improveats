import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
} from './types';

export const login = ({ email, password }) => (
  {
    type: LOGIN_SUCCESS,
    payload: {
      email,
      password,
    }
  }
);

export const logout = () => (
  {
    type: LOGOUT_SUCCESS
  }
);

export const emailChanged = email => (
  {
    type: EMAIL_CHANGED,
    payload: email,
  }
);

export const passwordChanged = password => (
  {
    type: PASSWORD_CHANGED,
    payload: password,
  }
);
