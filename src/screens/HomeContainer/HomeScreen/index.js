import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import RestaurantScreen from '../../RestaurantScreen';

export default StackNavigator({
  HomeScreen: { screen: HomeScreen },
  RestaurantScreen: { screen: RestaurantScreen },
});
