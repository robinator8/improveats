import { StackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import RestaurantScreen from '../RestaurantScreen';

export default StackNavigator({
  HomeScreen: { screen: TabNavigator },
  RestaurantScreen: { screen: RestaurantScreen },
});
