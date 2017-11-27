import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './HomePage';
import RestaurantScreen from '../RestaurantScreen';
import Header from '../RestaurantScreen/Header';

export default StackNavigator({
  HomePage: { screen: HomePage },
  RestaurantScreen: {
    screen: RestaurantScreen,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header navigation={navigation} />
      )
    })
  },
});
