import {
  RESTAURANTS_FETCH,
  RESTAURANTS_FETCH_SUCCESS,
  RESTAURANTS_FETCH_FAILURE,
  RESTAURANT_FETCH,
  RESTAURANT_FETCH_SUCCESS,
  RESTAURANT_FETCH_FAILURE,
} from './types';

export const restaurantsFetch = () => (
  (dispatch) => {
    dispatch({ type: RESTAURANTS_FETCH });
    fetch('https://my.api.mockaroo.com/restaurants.json', {
      method: 'GET',
      headers: {
        'X-API-Key': '2ad8d430'
      }
    }).then((restaurants) => restaurants.json())
      .then((restaurantsJson) => {
        restaurantsFetchSuccess(dispatch, restaurantsJson);
      })
      .catch((error) => {
        restaurantsFetchFailure(dispatch, error);
      });
  }
);

const restaurantsFetchSuccess = (dispatch, restaurants) => {
  dispatch({
    type: RESTAURANTS_FETCH_SUCCESS,
    payload: restaurants,
  });
};

const restaurantsFetchFailure = (dispatch, error) => {
  dispatch({
    type: RESTAURANTS_FETCH_FAILURE,
    payload: error,
  });
};
