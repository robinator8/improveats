import {
  RESTAURANTS_FETCH,
  RESTAURANTS_FETCH_SUCCESS,
  RESTAURANTS_FETCH_FAILURE,
  RESTAURANT_FETCH,
  RESTAURANT_FETCH_SUCCESS,
  RESTAURANT_FETCH_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  restaurants: {},
  restaurant: {},
  loading: true,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTAURANTS_FETCH:
      return {
        ...state,
        loading: true,
      };
    case RESTAURANTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
        error: ''
      };
    case RESTAURANTS_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'error',
      };
    case RESTAURANT_FETCH:
      return {
        ...state,
        loading: true,
      };
    case RESTAURANT_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
        error: ''
      };
    case RESTAURANT_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'error',
      };
    default:
      return state;
  }
};
