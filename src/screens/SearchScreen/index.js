import { StackNavigator } from 'react-navigation';
import SearchScreen from './SearchScreen';
import RestaurantScreen from '../RestaurantScreen';

export default StackNavigator({
  SearchScreen: { screen: SearchScreen },
  RestaurantScreen: { screen: RestaurantScreen },
});
