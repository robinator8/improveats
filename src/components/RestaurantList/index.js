import { StackNavigator } from 'react-navigation';
import RestaurantList from './RestaurantList';
import RestaurantView from '../RestaurantView';

export default StackNavigator({
  RestaurantList: { screen: RestaurantList },
  RestaurantView: { screen: RestaurantView },
});
