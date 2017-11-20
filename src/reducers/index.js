import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RestaurantReducer from './RestaurantReducer';
import AboutReducer from './AboutReducer';

export default combineReducers({
  auth: AuthReducer,
  restaurant: RestaurantReducer,
  about: AboutReducer,
});
