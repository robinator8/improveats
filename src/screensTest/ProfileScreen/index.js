import { StackNavigator } from 'react-navigation';
import Profile from './Profile';
import EditScreenOne from './EditScreenOne';
import EditScreenTwo from './EditScreenTwo';

export default StackNavigator({
  Profile: { screen: Profile },
  EditScreenOne: { screen: EditScreenOne },
  EditScreenTwo: { screen: EditScreenTwo }
});
