import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
  loggedIn: false,
  email: '',
  password: '',
  setPassword: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE,
        loggedIn: true,
        setPassword: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
      };
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload,
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload,
        setPassword: false,
      };
    default:
      return state;
  }
};
