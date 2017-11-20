import { ABOUT_EXPAND } from '../actions/types';
import data from '../resources/json/about.json';

const INITIAL_STATE = {
  selected: 0,
  data
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ABOUT_EXPAND:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};
