import { StackNavigator } from 'react-navigation';
import SearchPage from './SearchPage';
import RestaurantScreen from '../../RestaurantScreen';

export default StackNavigator({
  SearchPage: { screen: SearchPage },
});
